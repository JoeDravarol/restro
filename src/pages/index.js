import React, { useContext } from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Image from 'gatsby-image'
import { navigate, graphql } from 'gatsby'

import ContactInfo from '../components/ContactInfo'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Loader from '../components/Loader'
import NavContainer from '../components/NavContainer'
import ReservationForm from '../components/ReservationForm'
import SEO from '../components/Seo'

import ReservationFormContext from '../context/ReservationFormContext'
import { useGetCollection } from '../hooks/useGetCollection'

const IndexPage = ({ data }) => {
  const { formState, formMethods } = useContext(ReservationFormContext)
  const {
    data: [restaurantInfo],
    loading,
    error,
  } = useGetCollection('restaurantInfo')

  if (loading) return <Loader />

  if (error) console.error(error)

  const {
    address: { city, postcode, street },
    contact: { email, phone },
    trading: { weekdays, weekends },
  } = restaurantInfo

  const handleSubmit = e => {
    e.preventDefault()
    navigate('/review-reservation')
  }

  return (
    <>
      <SEO title="Welcome" />
      <NavContainer />

      <Layout>
        <article className="container content-container">
          <Image
            className="content__image"
            fluid={data.vegetableSalad.childImageSharp.fluid}
            alt="A family share size of vegetable Salad on white ceramic plate"
          />
          <Content
            title="Choosing quality food"
            description={`
                The right ingredients for the right food. Foodie ipsum dining
                experinces for individuals.
              `}
          >
            <div className="content__links">
              <AnchorLink
                to="/#reservation"
                title="Reservation"
                className="content__link button button--dark"
                stripHash
              />
              <AnchorLink to="/menu" className="content__link button">
                Explore Menu
              </AnchorLink>
            </div>
          </Content>
        </article>

        <article id="about" className="container content-container">
          <Image
            className="content__image"
            fluid={data.slicedOrange.childImageSharp.fluid}
            alt="Sliced blood orange with white-and-pink petal flower"
          />
          <Content
            title="About us"
            description={`
              If you’ve been to one of our restaurants, you’ve seen – and tasted –
              what keeps our customers coming back for more. Perfect materials and
              freshly baked food, delicious Mediterranean cuisines, and gourmet meals make us hard to resist! Stop in today and check us out!
            `}
          />
        </article>

        <article className="container content-container">
          <div className="featured__images">
            <Image
              className="featured__image"
              fluid={data.bakePie.childImageSharp.fluid}
              alt="Bake pie near white ceramic teapot"
            />
            <Image
              className="featured__image"
              fluid={data.pasta.childImageSharp.fluid}
              alt="Three round white plates with pasta near two glass of wine"
            />
            <Image
              className="featured__image"
              fluid={data.fruitSalad.childImageSharp.fluid}
              alt="Fruit salad on gray bowl"
            />
            <Image
              className="featured__image"
              fluid={data.eggSalad.childImageSharp.fluid}
              alt="Poached egg with vegetable and tomatoes on blue plate"
            />
          </div>
          <Content
            title="Discover our menu"
            description={`
            For those with pure food indulgence in mind, come next door and sate
            your desires with our ever changing internationally and seasonally
            inspired small plates. We love food, lots of different food, just like
            you.
          `}
          >
            <AnchorLink to="/menu" className="content__link button">
              Explore menu
            </AnchorLink>
          </Content>
        </article>

        <section id="reservation" className="reservation container">
          <h2 className="reservation__title">Make a reservation</h2>
          <ReservationForm
            handleSubmit={handleSubmit}
            handleChange={formMethods.handleChange}
            {...formState}
          />
        </section>

        <footer id="contact" className="primary-footer container">
          <div className="info">
            <ContactInfo
              title={'Opening'}
              infoData={[
                {
                  subTitle: weekdays.days,
                  description: `${weekdays.time.opening} - ${weekdays.time.closing}`,
                },
                {
                  subTitle: weekends.days,
                  description: `${weekends.time.opening} - ${weekends.time.closing}`,
                },
              ]}
            />

            <ContactInfo
              title={'Location'}
              infoData={[
                {
                  subTitle: 'Address',
                  description: street,
                },
                {
                  subTitle: 'City & Postcode',
                  description: `${city}, ${postcode}`,
                },
              ]}
            />

            <ContactInfo
              title={'Contacts'}
              infoData={[
                {
                  subTitle: 'Email',
                  description: email,
                },
                {
                  subTitle: 'Phone',
                  description: phone,
                },
              ]}
            />
          </div>
        </footer>
      </Layout>
    </>
  )
}

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    vegetableSalad: file(
      relativePath: { eq: "brooke-lark-vegetable-salad.jpg" }
    ) {
      ...fluidImage
    }

    slicedOrange: file(
      relativePath: { eq: "brooke-lark-sliced-blood-orange.jpg" }
    ) {
      ...fluidImage
    }

    bakePie: file(relativePath: { eq: "brooke-lark-bake-pie.jpg" }) {
      ...fluidImage
    }

    pasta: file(relativePath: { eq: "brooke-lark-pasta.jpg" }) {
      ...fluidImage
    }

    fruitSalad: file(relativePath: { eq: "brooke-lark-fruit-salad.jpg" }) {
      ...fluidImage
    }

    eggSalad: file(relativePath: { eq: "brooke-lark-poached-egg-salad.jpg" }) {
      ...fluidImage
    }
  }
`

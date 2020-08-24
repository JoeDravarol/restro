import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import Content from '../components/Content'
import Layout from '../components/Layout'
import NavContainer from '../components/NavContainer'
import SEO from '../components/Seo'

import '../styles/main.scss'

const IndexPage = () => (
  <>
    <SEO title="Welcome" />
    <NavContainer />

    <Layout>
      <article className="container content-container">
        <img
          src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          className="content__image"
          alt="food"
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
        <img
          src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          className="content__image"
          alt="food"
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
          <img
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            className="featured__image"
            alt="food"
          />
          <img
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            className="featured__image"
            alt="food"
          />
          <img
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            className="featured__image"
            alt="food"
          />
          <img
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            className="featured__image"
            alt="food"
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
    </Layout>
  </>
)

export default IndexPage

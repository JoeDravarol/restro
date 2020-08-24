import React, { Fragment } from 'react'

function ContactInfo({ title, infoData }) {
  return (
    <section>
      <h2 className="info__title">{title}</h2>

      {infoData.map(info => (
        <Fragment key={`${title}-${info.subTitle}`}>
          <h3 className="info__sub-title">{info.subTitle}</h3>
          <p className="info__desc">{info.description}</p>
        </Fragment>
      ))}
    </section>
  )
}

export default ContactInfo

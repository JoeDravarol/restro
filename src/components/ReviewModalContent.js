import React, { useState } from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Modal from './Modal'

const ReviewModalContent = ({ show }) => {
  return (
    <Modal show={show}>
      <div className="review-modal__body">
        <h3 className="review-modal__heading">Thank you</h3>
        <p className="review-modal__desc">
          Thank you for your reservation.
          <span className="review-modal__desc--line-break">
            We will contact you shortly.
          </span>
        </p>
      </div>

      <footer className="review-reservation__footer">
        <AnchorLink className="button button--text-only" to="/" title="Home">
          Back to home
        </AnchorLink>

        <AnchorLink className="button" to="/menu" title="Menu">
          See menu
        </AnchorLink>
      </footer>
    </Modal>
  )
}

export default ReviewModalContent

import React from 'react'

const Modal = ({ show, children }) => {
  const activeClassName = show
    ? 'modal-backdrop--active'
    : 'modal-backdrop--disabled'

  return (
    <div className={`modal-backdrop ${activeClassName}`}>
      <aside className="modal__content">{children}</aside>
    </div>
  )
}

export default Modal

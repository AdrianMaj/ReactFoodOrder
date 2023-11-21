import React from 'react'

export default function CartInformation({ cartElements, price, handleCloseModal, setModalWindow }) {
	const handleChangeToForm = () => {
		setModalWindow(1)
	}
	return (
		<>
			<h2>Your Cart</h2>
			<ul>{cartElements}</ul>
			<div className="cart-total">${price}</div>
			<div className="modal-actions">
				<button className="text-button" onClick={handleCloseModal}>
					Close
				</button>
				<button className="button" onClick={handleChangeToForm}>
					Go to Checkout
				</button>
			</div>
		</>
	)
}

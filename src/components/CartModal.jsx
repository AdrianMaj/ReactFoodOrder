import React from 'react'
import { createPortal } from 'react-dom'
import CartModalItem from './CartModalItem'

export default function CartModal() {
	return createPortal(
		<dialog open className="cart modal">
			<h2>Your Cart</h2>
			<ul>
				<CartModalItem />
				<CartModalItem />
				<CartModalItem />
			</ul>
			<div className="cart-total">$89.99</div>
			<div className="modal-actions">
				<button className="text-button">Close</button>
				<button className="button">Go to Checkout</button>
			</div>
		</dialog>,
		document.querySelector('#modal')
	)
}

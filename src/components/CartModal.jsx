import React, { useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import CartModalItem from './CartModalItem'
import { CartContext } from './CartContext'

export default function CartModal() {
	const cartCtx = useContext(CartContext)
	let totalPrice = 0
	const cartData = Object.values(cartCtx.meals)

	const cartElements = cartData.map(cartElementData => {
		const elementPrice = +cartElementData.price * +cartElementData.mealQuantity
		totalPrice += elementPrice
		return <CartModalItem key={Math.random()} data={cartElementData} />
	})

	return createPortal(
		<dialog open className="cart modal">
			<h2>Your Cart</h2>
			<ul>{cartElements}</ul>
			<div className="cart-total">${totalPrice.toFixed(2)}</div>
			<div className="modal-actions">
				<button className="text-button">Close</button>
				<button className="button">Go to Checkout</button>
			</div>
		</dialog>,
		document.querySelector('#modal')
	)
}

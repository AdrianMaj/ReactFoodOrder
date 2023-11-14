import React, { useContext } from 'react'
import { CartContext } from './CartContext'

export default function CartModalItem({ data }) {
	const ctxCart = useContext(CartContext)
	const handleAddQuantity = () => {
		ctxCart.handleItemToCart(data, true)
	}
	const handleRemoveQuantity = () => {
		ctxCart.handleItemToCart(data, false)
	}
	return (
		<li className="cart-item">
			<p>{data.name}</p>
			<div className="cart-item-actions">
				<button onClick={handleRemoveQuantity}>-</button>
				<p>{data.mealQuantity}</p>
				<button onClick={handleAddQuantity}>+</button>
			</div>
		</li>
	)
}

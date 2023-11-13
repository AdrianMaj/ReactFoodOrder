import React, { useContext } from 'react'
import { CartContext } from './CartContext'

export default function CartModalItem({ data }) {
	const ctxCart = useContext(CartContext)
	const handleAddQuantity = () => {
		ctxCart.updateQuantity(data.mealId)
	}
	return (
		<li className="cart-item">
			<p>{data.mealName}</p>
			<div className="cart-item-actions">
				<button>-</button>
				<p>{data.mealQuantity}</p>
				<button onClick={handleAddQuantity}>+</button>
			</div>
		</li>
	)
}

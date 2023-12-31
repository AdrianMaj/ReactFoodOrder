import React, { useContext, useState } from 'react'
import { CartContext } from './CartContext'

export default function Meal({ mealData }) {
	const cartCtx = useContext(CartContext)

	const handleAddToCart = () => {
		// console.log(mealData)
		cartCtx.handleItemToCart(mealData, true)
	}

	return (
		<li className="meal-item">
			<article>
				<img src={`http://localhost:3000/${mealData.image}`} alt={mealData.name} />
				<h3>{mealData.name}</h3>
				<p className="meal-item-price">${mealData.price}</p>
				<p className="meal-item-description">{mealData.description}</p>
				<div className="meal-item-actions">
					<button onClick={handleAddToCart} className="button">
						Add To Cart
					</button>
				</div>
			</article>
		</li>
	)
}

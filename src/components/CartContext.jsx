import React, { createContext, useState } from 'react'

export const CartContext = createContext({
	meals: {},
	updateQuantity: () => {},
	addItemToCart: () => {},
})

export default function CartContextProvider({ children }) {
	const [cart, setCart] = useState({})
	const [quantities, setQuantities] = useState({})

	const handleAddQuantity = mealId => {
		setQuantities(prevQuantities => {
			const updatedQuantity = (prevQuantities[mealId] || 0) + 1
			return {
				...prevQuantities,
				[mealId]: updatedQuantity,
			}
		})
	}
	const handleAddToCart = mealData => {
		const mealId = mealData.id
		handleAddQuantity(mealId)
		setCart(prevCart => {
			return {
				...prevCart,
				[mealId]: {
					mealId,
					mealName: mealData.name,
					mealPrice: mealData.price,
					mealQuantity: quantities[mealId],
				},
			}
		})
	}
	const ctxValue = {
		meals: cart,
		updateQuantity: mealId => {
			handleAddQuantity(mealId)
		},
		addItemToCart: mealData => {
			handleAddToCart(mealData)
		},
	}

	return <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
}

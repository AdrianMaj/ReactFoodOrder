import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({
	meals: {},
	updateQuantity: () => {},
	addItemToCart: () => {},
})

export default function CartContextProvider({ children }) {
	const [cart, setCart] = useState({})
	const [totalQuantity, setTotalQuantity] = useState({})

	const handleAddToCart = mealData => {
		const mealId = mealData.id
		setCart(prevCart => {
			return {
				...prevCart,
				[mealId]: {
					mealId,
					mealName: mealData.name,
					mealPrice: mealData.price,
					mealQuantity: totalQuantity[mealId],
				},
			}
		})
		console.log(cart)
	}
	const ctxValue = {
		meals: cart,
		updateQuantity: (quantity, id) => {
			setTotalQuantity(prevQuantity => {
				return {
					...prevQuantity,
					[id]: quantity,
				}
			})
		},
		addItemToCart: mealData => {
			handleAddToCart(mealData)
		},
	}

	return <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
}

import React, { createContext, useState } from 'react'

export const CartContext = createContext({
	meals: {},
	handleItemToCart: () => {},
})

export default function CartContextProvider({ children }) {
	const [cart, setCart] = useState({})
	const [quantities, setQuantities] = useState({})

	const handleAddQuantity = (mealId, add) => {
		setQuantities(prevQuantities => {
			let updatedQuantity
			if (add) {
				updatedQuantity = (prevQuantities[mealId] ? +prevQuantities[mealId] : 0) + 1
			} else if (!add) {
				updatedQuantity = prevQuantities[mealId] ? +prevQuantities[mealId] - 1 : 0
			}
			return {
				...prevQuantities,
				[mealId]: updatedQuantity,
			}
		})
	}
	const handleItemToCart = (mealData, add) => {
		const mealId = mealData.id
		handleAddQuantity(mealId, add)
		console.log(quantities[mealId])
		setCart(prevCart => {
			return {
				...prevCart,
				[mealId]: {
					id: mealId,
					name: mealData.name,
					price: mealData.price,
					mealQuantity: quantities[mealId],
				},
			}
		})
	}
	const ctxValue = {
		meals: cart,
		handleItemToCart: (mealData, add) => {
			handleItemToCart(mealData, add)
		},
	}

	return <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
}

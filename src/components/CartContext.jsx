import React, { createContext, useState, useRef } from 'react'

export const CartContext = createContext({
	meals: {},
	handleItemToCart: () => {},
	totalQuantity: 0,
	modal,
	setCart: () => {},
	setQuantities: () => {},
})

export default function CartContextProvider({ children }) {
	const [cart, setCart] = useState({})
	const [quantities, setQuantities] = useState({})
	const [totalQuantity, setTotalQuantity] = useState(0)
	const modal = useRef()

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
		const quantityArray = Object.values(quantities)
		const total = quantityArray.reduce((prevSum, quantity) => prevSum + quantity, 0)
		setTotalQuantity(total)
	}
	const handleItemToCart = (mealData, add) => {
		const mealId = mealData.id
		handleAddQuantity(mealId, add)
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
		totalQuantity: totalQuantity,
		modal: modal,
		setCart,
		setQuantities,
	}

	return <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
}

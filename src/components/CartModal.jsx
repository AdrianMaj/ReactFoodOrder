import React, { useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import CartModalItem from './CartModalItem'
import { CartContext } from './CartContext'
import CheckoutForm from './CheckoutForm'
import CartInformation from './CartInformation'
import CartSuccess from './CartSuccess'

export default function CartModal() {
	const cartCtx = useContext(CartContext)
	let totalPrice = 0
	const cartData = Object.values(cartCtx.meals)

	const cartElements = cartData.map(cartElementData => {
		const elementPrice = +cartElementData.price * +cartElementData.mealQuantity
		totalPrice += elementPrice
		return <CartModalItem key={Math.random()} data={cartElementData} />
	})
	const handleCloseModal = () => {
		cartCtx.modal.current.close()
	}
	async function sendOrder(order) {
		try {
			const response = await fetch('http://localhost:3000/orders', {
				method: 'POST',
				body: JSON.stringify({
					order: order,
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			})
			const resData = await response.json()
			console.log(resData)
		} catch (error) {
			console.log('Error' + error.message)
		}
	}

	const handleFormSubmission = e => {
		e.preventDefault()
		const fd = new FormData(e.target)
		const order = {
			items: cartCtx.meals,
			customer: {
				email: fd.get('email'),
				name: fd.get('full-name'),
				street: fd.get('street'),
				['postal-code']: fd.get('postal'),
				city: fd.get('city'),
			},
		}
		sendOrder(order)
		cartCtx.setCart({})
		cartCtx.setQuantities({})
		setModalWindow(2)
	}

	const [modalWindow, setModalWindow] = useState(0)
	let modalContent
	if (modalWindow === 0) {
		modalContent = (
			<CartInformation
				cartElements={cartElements}
				price={totalPrice.toFixed(2)}
				handleCloseModal={handleCloseModal}
				setModalWindow={setModalWindow}
			/>
		)
	} else if (modalWindow === 1) {
		modalContent = (
			<CheckoutForm
				price={totalPrice.toFixed(2)}
				handleFormSubmission={handleFormSubmission}
				handleCloseModal={handleCloseModal}
			/>
		)
	} else if (modalWindow === 2) {
		modalContent = <CartSuccess handleCloseModal={handleCloseModal} setModalWindow={setModalWindow} />
	}

	return createPortal(
		<dialog ref={cartCtx.modal} className="cart modal">
			{modalContent}
		</dialog>,
		document.querySelector('#modal')
	)
}

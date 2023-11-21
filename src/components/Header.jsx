import React, { useContext } from 'react'
import logo from '../assets/logo.jpg'
import { CartContext } from './CartContext'

export default function Header() {
	const cartCtx = useContext(CartContext)
	const handleModal = () => {
		cartCtx.modal.current.showModal()
	}
	return (
		<div id="main-header">
			<h1 id="title">
				<img src={logo} alt="" />
				reactfood
			</h1>
			<button onClick={handleModal}>
				Cart <span>({cartCtx.totalQuantity})</span>
			</button>
		</div>
	)
}

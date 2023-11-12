import React from 'react'

export default function CartModalItem() {
	return (
		<li className="cart-item">
			<p>Seafood Paella - q x price</p>
			<div className="cart-item-actions">
				<button>-</button>
				<p>2</p>
				<button>+</button>
			</div>
		</li>
	)
}

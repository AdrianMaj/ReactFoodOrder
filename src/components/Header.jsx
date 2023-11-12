import React from 'react'
import logo from '../assets/logo.jpg'

export default function Header() {
	return (
		<div id="main-header">
			<h1 id="title">
				<img src={logo} alt="" />
				reactfood
			</h1>
			<button>
				Cart <span>(1)</span>
			</button>
		</div>
	)
}

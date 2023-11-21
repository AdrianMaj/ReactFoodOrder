import React from 'react'

export default function CartSuccess({ handleCloseModal, setModalWindow }) {
	const handleCloseSubmit = () => {
		handleCloseModal()
		setModalWindow(0)
	}
	return (
		<>
			<h2>Success!</h2>
			<p>Your order was submitted successfully.</p>
			<p>We will get back to you with more details via email within the next few minutes.</p>
			<div className="modal-actions">
				<button type="button" className="button" onClick={handleCloseSubmit}>
					Okay
				</button>
			</div>
		</>
	)
}

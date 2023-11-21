import React from 'react'

export default function CheckoutForm({ price, handleFormSubmission, handleCloseModal }) {
	return (
		<>
			<h2>Checkout</h2>
			<p>Total Amount: ${price}</p>
			<form onSubmit={e => handleFormSubmission(e)} className="control">
				<div className="control">
					<label htmlFor="name">Full Name</label>
					<input required type="text" name="full-name" id="name" />
				</div>
				<div className="control">
					<label htmlFor="email">E-Mail Address</label>
					<input required type="email" name="email" id="email" />
				</div>
				<div className="control">
					<label htmlFor="street">Street</label>
					<input required type="text" name="street" id="street" />
				</div>
				<div className="control-row">
					<div className="control">
						<label htmlFor="postal">Postal Code</label>
						<input required type="text" name="postal" id="postal" />
					</div>
					<div className="control">
						<label htmlFor="city">City</label>
						<input required type="text" name="city" id="city" />
					</div>
				</div>
				<div className="modal-actions">
					<button type="button" className="text-button" onClick={handleCloseModal}>
						Close
					</button>
					<button type="submit" className="button">
						Submit Order
					</button>
				</div>
			</form>
		</>
	)
}

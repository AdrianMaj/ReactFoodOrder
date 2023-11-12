import React, { useEffect, useState } from 'react'
import Meal from './Meal'

export default function MealsList() {
	const [meals, setMeals] = useState([])
	const [isFetching, setIsFetching] = useState(false)
	const [cart, setCart] = useState({})
	useEffect(() => {
		async function fetchMeals() {
			setIsFetching(true)
			try {
				const response = await fetch('http://localhost:3000/meals')
				const resData = await response.json()
				setMeals(resData)
			} catch (error) {
				console.log('Error' + error.message)
			}
			setIsFetching(false)
		}
		fetchMeals()
	}, [])
	const mealList = meals.map(meal => <Meal key={meal.id} setCart={setCart} cart={cart} mealData={meal} />)

	return <ul id="meals">{isFetching ? <p>Loading some data...</p> : mealList}</ul>
}

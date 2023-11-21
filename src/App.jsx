import CartContextProvider from './components/CartContext'
import CartModal from './components/CartModal'
import Header from './components/Header'
import MealsList from './components/MealsList'

function App() {
	return (
		<>
			<CartContextProvider>
				<Header />
				<CartModal />
				<MealsList />
			</CartContextProvider>
		</>
	)
}

export default App

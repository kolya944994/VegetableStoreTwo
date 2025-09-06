import { useEffect } from 'react'
import Header from '../components/header/Header'
import { Content } from '../components/content/Content'
import { useTypedDispatch } from '../hooks/redux'
import { fetchProducts } from '../reducers/vegetableShopSlice'

function ShopPage() {
	const dispatch = useTypedDispatch()

	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	return (
		<>
			<Header />
			<Content />
		</>
	)
}

export default ShopPage

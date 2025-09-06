import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { MantineProvider } from '@mantine/core'
import { ProductList } from './ProductList'
import { ShopContext } from '../../contexts/ShopContext'
import type { Product } from '../../types/Product'

const mockProducts: Product[] = [
	{
		id: 1,
		name: 'Tomato',
		price: 10,
		image: 'tomato.png',
		category: 'vegetable',
	},
	{
		id: 2,
		name: 'Cucumber',
		price: 5,
		image: 'cucumber.png',
		category: 'vegetable',
	},
]

describe('ProductList component', () => {
	it('Должен рендерить заглушку  ', () => {
		render(
			<MantineProvider>
				<ShopContext.Provider
					value={{
						products: [],
						loading: true,
						cart: [],
						addToCart: () => {},
						setProducts: () => {},
						setLoading: () => {},
						setCart: () => {},
					}}
				>
					<ProductList />
				</ShopContext.Provider>
			</MantineProvider>
		)
		const skeletons = screen.getAllByAltText('loading')
		expect(skeletons).toHaveLength(30)
	})
	//
	it('должен рендерить карточку с товаром', () => {
		render(
			<MantineProvider>
				<ShopContext.Provider
					value={{
						products: mockProducts,
						loading: false,
						cart: [],
						addToCart: () => {},
						setProducts: () => {},
						setLoading: () => {},
						setCart: () => {},
					}}
				>
					<ProductList />
				</ShopContext.Provider>
			</MantineProvider>
		)
		expect(screen.getByText(/Tomato/)).toBeInTheDocument()
		expect(screen.getByText(/Cucumber/)).toBeInTheDocument()
	})
})

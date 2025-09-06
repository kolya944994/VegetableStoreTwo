import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { MantineProvider } from '@mantine/core'
import { ProductItem } from './ProductItem'
import { ShopContext } from '../../contexts/ShopContext'
const mocProduct = {
	id: 1,
	name: 'Tomato',
	price: 10,
	image: 'tomato.png',
	category: 'vegetable',
}

describe('ProductItem component', () => {
	it('Должен рендерить товар в карточке  ', () => {
		render(
			<MantineProvider>
				<ShopContext.Provider
					value={{
						products: [mocProduct],
						loading: false,
						cart: [],
						addToCart: () => {},
						setProducts: () => {},
						setLoading: () => {},
						setCart: () => {},
					}}
				>
					<ProductItem product={mocProduct} showButton={true} />
				</ShopContext.Provider>
			</MantineProvider>
		)
		expect(screen.getByText(/Tomato/i)).toBeInTheDocument()
		expect(screen.getByText(/\$10/)).toBeInTheDocument()
	})
})

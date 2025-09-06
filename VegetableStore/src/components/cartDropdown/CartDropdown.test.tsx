import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { MantineProvider } from '@mantine/core'
import CartDropdown from './CartDropdown'
import { ShopProvider } from '../../contexts/ShopContext'

describe('CartDropdown component', () => {
	it('Должен рендерить пустую корзину ', () => {
		render(
			<MantineProvider>
				<ShopProvider>
					<CartDropdown />
				</ShopProvider>
			</MantineProvider>
		)
		expect(screen.getByText(/you cart is empty!/i)).toBeInTheDocument()
		expect(screen.getByAltText(/empty cart/i)).toBeInTheDocument()
	})
})

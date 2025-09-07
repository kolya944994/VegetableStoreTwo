import { describe, it, expect } from 'vitest'
import { screen, fireEvent, render } from '@testing-library/react'
import ShopPage from '../../pages/ShopPage'
import { ShopProvider } from '../../contexts/ShopContext'
import { MantineProvider } from '@mantine/core'

describe('Header component', () => {
	it('при нажатии на корзину, должен открываться CartDropdown', () => {
		render(
			<MantineProvider>
				<ShopProvider>
					<ShopPage />
				</ShopProvider>
			</MantineProvider>
		)
		expect(screen.queryByText(/you cart is empty!/i)).not.toBeInTheDocument()
		fireEvent.click(screen.getByRole('button', { name: /Cart/ }))
		expect(screen.getByText(/you cart is empty!/i)).toBeInTheDocument()
	})
})

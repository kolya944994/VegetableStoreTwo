import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ShopPage from '../../pages/ShopPage'
import { ShopProvider } from '../../contexts/ShopContext'
import { MantineProvider } from '@mantine/core'
import type { Product } from '../../types/Product'

const mockProducts: Product[] = [
	{
		id: 1,
		name: 'Tomato',
		price: 10,
		image: 'tomato.png',
		category: 'vegetable',
	},
]

describe('Header + Cart integration', () => {
	beforeEach(() => {
		;(globalThis.fetch as any) = vi.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(mockProducts),
			})
		)
	})

	it('добавляет товар в корзину при клике на Add to cart', async () => {
		render(
			<MantineProvider>
				<ShopProvider>
					<ShopPage />
				</ShopProvider>
			</MantineProvider>
		)

		const buttons = await screen.findAllByRole('button', {
			name: /add to cart/i,
		})
		fireEvent.click(buttons[0])

		fireEvent.click(screen.getByRole('button', { name: /Cart/ }))

		expect(screen.getByText(/total/i)).toBeInTheDocument()
	})
})

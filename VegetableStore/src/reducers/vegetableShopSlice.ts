import type { CartItem } from '../types/CartItem'
import type { Product } from '../types/Product'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

//
export const fetchProducts = createAsyncThunk(
	'vegetableShop/fetchProducts',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(
				'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json'
			)
			if (!response.ok) {
				throw new Error('Данные не получены')
			}
			const data = await response.json()
			return data
		} catch (error) {
			return rejectWithValue((error as Error).message)
		}
	}
)
//

type InitialStateType = {
	products: Product[]
	loading: boolean
	cart: CartItem[]
	error: string | null
}

const initialState: InitialStateType = {
	products: [],
	loading: true,
	cart: [],
	error: null,
}

const vegetableShopSlice = createSlice({
	name: 'vegetableShop',
	initialState,
	reducers: {
		setProducts(state, action: PayloadAction<Product[]>) {
			state.products = action.payload
		},
		setCart(state, action: PayloadAction<CartItem[]>) {
			state.cart = action.payload
		},
		setLoading(state, action: PayloadAction<boolean>) {
			state.loading = action.payload
		},
		addToCart(
			state,
			action: PayloadAction<{ product: Product; quantity: number }>
		) {
			const { product, quantity } = action.payload
			const existing = state.cart.find(item => item.id === product.id)

			if (existing) {
				existing.quantity += quantity
			} else {
				state.cart.push({ ...product, quantity })
			}
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, state => {
				state.error = null
				state.loading = true
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.products = action.payload
				state.loading = false
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.error = action.payload as string
				state.loading = false
			})
	},
})

export const { setProducts, setLoading, setCart, addToCart } =
	vegetableShopSlice.actions

export default vegetableShopSlice.reducer

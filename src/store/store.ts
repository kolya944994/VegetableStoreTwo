import { combineReducers, configureStore } from '@reduxjs/toolkit'
import vegetableShopReducer from '../reducers/vegetableShopSlice'

const rootReducer = combineReducers({
	vegetableShopReducer: vegetableShopReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

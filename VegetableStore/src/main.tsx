import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { setupStore } from './store/store.ts'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={setupStore()}>
			<MantineProvider>
				<App />
			</MantineProvider>
		</Provider>
	</StrictMode>
)

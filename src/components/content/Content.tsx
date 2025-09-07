import { ProductList } from '../../modules/productList/ProductList'
import styles from './Content.module.css'

function Content() {
	return (
		<div className={styles.containerContent}>
			<h1 className={styles.title}>Catalog</h1>
			<div className={styles.catalogCard}>
				<ProductList />
			</div>
		</div>
	)
}

export { Content }

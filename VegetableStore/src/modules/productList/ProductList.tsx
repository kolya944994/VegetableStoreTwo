import { MyCard } from '../../ui/card/Card'
import styles from './ProductList.module.css'
import loader from '../../assets/loader.svg'
import { ProductItem } from '../productItem/ProductItem'
import { useTypedSelector } from '../../hooks/redux'

export function ProductList() {
	const { loading, products } = useTypedSelector(
		state => state.vegetableShopReducer
	)

	if (loading) {
		return (
			<div className={styles.containerProducts}>
				{Array.from({ length: 30 }).map((_, i) => (
					<div key={i} className={styles.containerSkeletonCard}>
						<MyCard className={styles.skeletonCard}>
							<img src={loader} alt='loading' />
						</MyCard>
					</div>
				))}
			</div>
		)
	}

	return (
		<div className={styles.containerProducts}>
			{products.map(product => (
				<ProductItem key={product.id} product={product} />
			))}
		</div>
	)
}

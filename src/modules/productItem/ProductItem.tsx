import type { Product } from '../../types/Product'
import { MyCard } from '../../ui/card/Card'
import { MyButton } from '../../ui/button/Button'
import { MyStepper } from '../../ui/stepper/Stepper'
import styles from './ProductItem.module.css'
import { useState } from 'react'

import { useTypedDispatch } from '../../hooks/redux'
import { addToCart } from '../../reducers/vegetableShopSlice'

type ProductItemProps = {
	product: Product
	showButton?: boolean
}

export function ProductItem({ product, showButton = true }: ProductItemProps) {
	const dispatch = useTypedDispatch()

	const [quantity, setQuantity] = useState(1)

	return (
		<MyCard key={product.id}>
			<img src={product.image} alt={product.name} />
			<h4
				className={styles.positionCart}
				style={{ marginTop: 50, marginBottom: 0 }}
			>
				{product.name.split(' - ').map((partName, index) =>
					index === 1 ? (
						<span key={index} style={{ color: '#868E96' }}>
							{partName}
						</span>
					) : (
						<span key={index}>{partName}</span>
					)
				)}
				<span>
					<MyStepper value={quantity} onChange={setQuantity} />
				</span>
			</h4>
			<h3 className={styles.positionCart}>
				${product.price}
				{showButton && (
					<span className={styles.positionButton}>
						<MyButton
							onClick={() => dispatch(addToCart({ product, quantity }))}
							color='#E7FAEB'
							colorText='#3B944E'
							style={{ width: '205px' }}
						>
							Add to cart
						</MyButton>
					</span>
				)}
			</h3>
		</MyCard>
	)
}

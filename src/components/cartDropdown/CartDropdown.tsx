import { MyCard } from '../../ui/card/Card'
import styles from './CartDropdown.module.css'
import cartEmpty from '../../assets/cartEmpty.jpg'
import { MyStepper } from '../../ui/stepper/Stepper'
import { setCart } from '../../reducers/vegetableShopSlice'
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux'

const CartDropdown = () => {
	const dispatch = useTypedDispatch()

	const { cart } = useTypedSelector(state => state.vegetableShopReducer)

	const allPrice = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)

	return (
		<div>
			<MyCard className={styles.cartDropdownPosition}>
				{cart.length === 0 ? (
					<div className={styles.positionEmptyCartDropdown}>
						<img
							src={cartEmpty}
							alt='empty cart'
							className={styles.imgPositionDropDawn}
						/>
						<p className={styles.textPositionDropDawn}>You cart is empty!</p>
					</div>
				) : (
					<div className={styles.positionCartDropdown}>
						{cart.map(currCart => (
							<MyCard
								key={currCart.id}
								style={{
									border: 'none',
									boxShadow: 'none',
									padding: 0,
									paddingTop: 15,
									paddingBottom: 15,
								}}
							>
								<div className={styles.pos}>
									<img
										src={currCart.image}
										alt={currCart.name}
										style={{ width: '64px', height: '64px' }}
									/>

									<div>
										<h4 className={styles.cartDropdownName}>
											{currCart.name.split(' - ').map((char, index) =>
												index === 1 ? (
													<span
														key={index}
														style={{ color: '#868E96', marginLeft: 10 }}
													>
														{char}
													</span>
												) : (
													<span key={index}> {char}</span>
												)
											)}
										</h4>
										<h3 className={styles.cartDropdownPrice}>
											${currCart.price}
										</h3>
									</div>

									<span className={styles.spanCartDropdown}>
										<MyStepper
											value={currCart.quantity}
											onChange={newValue =>
												dispatch(
													setCart(
														cart.map(item =>
															item.id === currCart.id
																? { ...item, quantity: newValue }
																: item
														)
													)
												)
											}
										/>
									</span>
								</div>
							</MyCard>
						))}
						<div className={styles.totalAllCartDropdown}>
							<h4 className={styles.totalCartDropdown}>Total</h4>
							<h4 className={styles.totalCartDropdown}>${allPrice}</h4>
						</div>
					</div>
				)}
			</MyCard>
		</div>
	)
}

export default CartDropdown

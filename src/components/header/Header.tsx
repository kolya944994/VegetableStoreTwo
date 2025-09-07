import styles from './Header.module.css'
import { MyButton } from '../../ui/button/Button'
import CartDropdown from '../cartDropdown/CartDropdown'
import { useState } from 'react'
import { Badge } from '@mantine/core'
import { useTypedSelector } from '../../hooks/redux'

function Header() {
	const { cart } = useTypedSelector(state => state.vegetableShopReducer)

	const [isOpen, setIsOpen] = useState(false)

	function openDropDown() {
		setIsOpen(prev => !prev)
	}

	return (
		<div className={styles.containerPosition}>
			<nav className={styles.containerNav}>
				<div className={`${styles.containerLogo} ${styles.container}`}>
					<a href='/' className={styles.logo}>
						<span className={styles.leftLogo}>Vegetable</span>
						<span className={styles.rightLogo}>SHOP</span>
					</a>
				</div>
				<div className={`${styles.containerButton} ${styles.container}`}>
					<MyButton onClick={openDropDown}>
						<Badge
							color='#FFFFFF'
							style={{
								color: 'black',
								width: 24,
								height: 24,
								padding: 0,
								borderRadius: '50%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{cart.length}
						</Badge>
						Cart
					</MyButton>
					{isOpen && <CartDropdown />}
				</div>
			</nav>
		</div>
	)
}

export default Header

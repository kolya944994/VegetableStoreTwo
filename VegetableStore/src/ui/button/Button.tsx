import { Button, Flex } from '@mantine/core'
import styles from './Button.module.css'
import React from 'react'
import { IconShoppingCart } from '@tabler/icons-react'

type MyButtonType = {
	children: React.ReactNode
	onClick?: () => void
	color?: string
	colorText?: string
	style?: React.CSSProperties
}

function MyButton({
	children,
	onClick,
	color = '#54B46A',
	colorText,
	style,
}: MyButtonType) {
	return (
		<Button
			className={styles.myButton}
			onClick={onClick}
			styles={{ root: { backgroundColor: color, color: colorText, ...style } }}
		>
			<Flex align='center' gap='10px'>
				{children}
				<IconShoppingCart size={20} color={colorText} />
			</Flex>
		</Button>
	)
}

export { MyButton }

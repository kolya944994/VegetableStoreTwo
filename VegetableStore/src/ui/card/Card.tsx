import styles from './Card.module.css'
import { Card } from '@mantine/core'
import React from 'react'

type MyCardType = {
	children?: React.ReactNode
	style?: React.CSSProperties
	className?: string
}

function MyCard({ children, style, className }: MyCardType) {
	return (
		<Card className={`${styles.card} ${className || ''}`} style={style}>
			{children}
		</Card>
	)
}
export { MyCard }

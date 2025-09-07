import styles from './Stepper.module.css'

type MyStepperProps = {
	value: number
	onChange: (newValue: number) => void
}

function MyStepper({ value, onChange }: MyStepperProps) {
	function increment() {
		onChange(value + 1)
	}

	function decrement() {
		onChange(Math.max(1, value - 1))
	}
	return (
		<div className={styles.containerStepper}>
			<button className={styles.buttonStepper} onClick={decrement}>
				-
			</button>
			<span className={styles.spanStepper}>{value}</span>
			<button className={styles.buttonStepper} onClick={increment}>
				+
			</button>
		</div>
	)
}

export { MyStepper }

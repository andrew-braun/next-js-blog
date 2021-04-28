import Card from "../Card/index"
import styles from "./grid.module.css"

function Grid(props) {
	const { content } = props

	return <div className={styles.grid}>{content}</div>
}

export default Grid

import Image from "next/image"
import styles from "./post-header.module.css"

function PostHeader(props) {
	const { title, image } = props

	return (
		<header className={styles.postHeader}>
			<h1 className={styles.postTitle}>{title}</h1>
			<div className={styles.postImage}>
				<Image
					src={image}
					alt={title}
					width={200}
					height={150}
					layout="responsive"
				/>
			</div>
		</header>
	)
}

export default PostHeader

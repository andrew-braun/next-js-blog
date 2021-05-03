import Link from "next/link"
import Image from "next/image"
import styles from "./card.module.css"

function Card(props) {
	const { title, image, excerpt, date, slug } = props.post.data
	console.log(image)

	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	})

	return (
		<article className={styles.card}>
			<Link href={`/posts/${slug}`}>
				<a className={styles.cardLink}>
					<div className={styles.cardImage}>
						<Image
							src={`/images/posts/${slug}/${image}`}
							alt={title}
							width={300}
							height={200}
							layout="responsive"
						/>
					</div>
					<div className={styles.cardInfo}>
						<h3 className={styles.cardHeader}>{title}</h3>
						<time className={styles.cardDate}>{date}</time>
						<p className={styles.cardExcerpt}>{excerpt}</p>
					</div>
				</a>
			</Link>
		</article>
	)
}

export default Card

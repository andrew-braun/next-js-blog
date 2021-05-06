import Image from "next/image"
import styles from "./hero.module.css"

function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.heroImage}>
				<Image
					src="/images/site/flower-field-andrew-edit.png"
					alt="An image of Andrew Braun in a field of flowers"
					width={300}
					height={300}
				/>
			</div>
			<h1 className={styles.heroTitle}>Hey there! I'm Andrew.</h1>
			<p className={styles.heroSubTitle}>
				I write about web development, code, and nerd things. Join me!
			</p>
		</section>
	)
}

export default Hero

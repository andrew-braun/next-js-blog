import { useState, useEffect } from "react"
import Grid from "../../ui/Grid/index"
import Card from "../../ui/Card/index"
import styles from "./featured-posts.module.css"

function FeaturedPosts(props) {
	const [featuredPosts, setFeaturedPosts] = useState([])

	useEffect(() => {
		const posts = props.posts

		const featuredPostList = posts
			? posts.map((post) => {
					return <Card post={post} />
			  })
			: null

		const featuredPostGrid = featuredPostList
		setFeaturedPosts(featuredPostGrid)
	}, [])

	return (
		<section className={styles.featuredPosts}>
			<h1 className={styles.featuredPostsHeader}>Featured Posts</h1>
			<Grid content={featuredPosts} />
		</section>
	)
}

export default FeaturedPosts

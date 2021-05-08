import Grid from "../../ui/Grid/index"
import Card from "../../ui/Card/index"
import styles from "./featured-posts.module.css"

function FeaturedPosts(props) {
	const posts = props.posts

	const featuredPosts = posts
		? posts.map((post) => {
				return <Card post={post} key={post.slug} />
		  })
		: null

	return (
		<section className={styles.featuredPosts}>
			<h1 className={styles.featuredPostsHeader}>Featured Posts</h1>
			<Grid content={featuredPosts} />
		</section>
	)
}

export default FeaturedPosts

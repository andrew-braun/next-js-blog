import Grid from "../../components/ui/Grid"
import Card from "../../components/ui/Card"
import styles from "./all-posts.module.css"

function AllPosts(props) {
	const { posts } = props

	const postList = posts
		? posts.map((post) => {
				return <Card post={post} key={post.slug} />
		  })
		: null

	return (
		<section className={styles.allPosts}>
			<Grid content={postList} />
		</section>
	)
}

export default AllPosts

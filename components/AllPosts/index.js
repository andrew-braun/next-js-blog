import { useState, useEffect } from "react"
import Grid from "../../components/ui/Grid"
import Card from "../../components/ui/Card"
import styles from "./all-posts.module.css"

function AllPosts(props) {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const posts = props.posts

		const postList = posts
			? posts.map((post) => {
					return <Card post={post} key={post.slug} />
			  })
			: null

		const postGrid = postList
		setPosts(postList)
	}, [])

	return (
		<section className={styles.allPosts}>
			<Grid content={posts} />
		</section>
	)
}

export default AllPosts

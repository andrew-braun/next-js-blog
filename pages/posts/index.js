import { Fragment } from "react"
import AllPosts from "../../components/AllPosts/index"
import styles from "./posts.module.css"

import DUMMY_DATA from "../../DUMMY_DATA"

function PostsPage(props) {
	const posts = props.posts.data
	console.log(posts)

	return (
		<Fragment>
			<h1 className={styles.allPostsTitle}>All Posts</h1>
			<div className={styles.allPostsGrid}>
				<AllPosts posts={posts} />
			</div>
		</Fragment>
	)
}

export default PostsPage

export async function getStaticProps() {
	const response = await fetch("http://localhost:3000/api/posts/posts")
	const allPosts = await response.json()

	return {
		props: { posts: allPosts },
	}
}

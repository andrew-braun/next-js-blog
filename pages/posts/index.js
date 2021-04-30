import { Fragment } from "react"
import AllPosts from "../../components/AllPosts/index"
import styles from "./posts.module.css"
import { getAllPosts } from "../../helpers/posts-util"

import DUMMY_DATA from "../../DUMMY_DATA"

function PostsPage() {
	return (
		<Fragment>
			<h1 className={styles.allPostsTitle}>All Posts</h1>
			<div className={styles.allPostsGrid}>
				<AllPosts posts={DUMMY_DATA} />
			</div>
		</Fragment>
	)
}

export default PostsPage

export async function getStaticProps() {
	getAllPosts()
	return {
		props: { DUMMY_DATA },
	}
}

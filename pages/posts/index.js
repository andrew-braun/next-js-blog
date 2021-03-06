import { Fragment } from "react"
import Head from "next/head"
import AllPosts from "../../components/AllPosts/index"
import styles from "./posts.module.css"

import { getAllPosts } from "../../helpers/posts-util"

function PostsPage(props) {
	const posts = props.posts
	// console.log(posts)

	return (
		<Fragment>
			<Head>
				<title>All Posts</title>
				<meta
					name="description"
					contents="A list of all tech, coding, and Next.js-related posts"
				/>
			</Head>
			<h1 className={styles.allPostsTitle}>All Posts</h1>
			<div className={styles.allPostsGrid}>
				<AllPosts posts={posts} />
			</div>
		</Fragment>
	)
}

export default PostsPage

export async function getStaticProps() {
	// const response = await fetch("http://localhost:3000/api/posts/posts")
	// const allPosts = await response.json()

	const allPosts = getAllPosts()

	return {
		props: { posts: allPosts },
	}
}

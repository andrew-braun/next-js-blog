import { Fragment } from "react"
import Head from "next/head"
import Hero from "../components/homepage/Hero/index"
import FeaturedPosts from "../components/homepage/FeaturedPosts/index"
import { getFeaturedPosts } from "../helpers/posts-util"

function HomePage(props) {
	const posts = props.posts

	return (
		<Fragment>
			<Head>
				<title>Next-Blog</title>
				<meta name="description" content="I mostly write about Next.js" />
			</Head>
			<Hero />
			<FeaturedPosts posts={posts} />
		</Fragment>
	)
}

export async function getStaticProps() {
	// const response = await fetch(
	// 	"http://localhost:3000/api/posts/posts?featured=true"
	// )
	// const allPosts = await response.json()

	const allPosts = getFeaturedPosts()
	// console.log(allPosts)
	return {
		props: { posts: allPosts },
		revalidate: 1800,
	}
}

export default HomePage

import { Fragment } from "react"
import Hero from "../components/homepage/Hero/index"
import FeaturedPosts from "../components/homepage/FeaturedPosts/index"

function HomePage(props) {
	const posts = props.posts.data

	return (
		<Fragment>
			<Hero />
			<FeaturedPosts posts={posts} />
		</Fragment>
	)
}

export async function getStaticProps() {
	const response = await fetch("http://localhost:3000/api/posts/posts")
	const allPosts = await response.json()

	return {
		props: { posts: allPosts },
	}
}

export default HomePage

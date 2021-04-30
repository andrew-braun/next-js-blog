import { Fragment } from "react"
import Hero from "../components/homepage/Hero/index"
import FeaturedPosts from "../components/homepage/FeaturedPosts/index"

import DUMMY_DATA from "../DUMMY_DATA"
function HomePage() {
	const DUMMY_POSTS = DUMMY_DATA

	return (
		<Fragment>
			<Hero />
			<FeaturedPosts posts={DUMMY_POSTS} />
		</Fragment>
	)
}

export default HomePage

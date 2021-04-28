import { Fragment } from "react"
import Hero from "../components/homepage/Hero/index"
import FeaturedPosts from "../components/homepage/FeaturedPosts/index"

function HomePage() {
	const DUMMY_POSTS = [
		{
			title: "What's Next? Breaking Down the Framework",
			image: "getting-started-nextjs.png",
			excerpt:
				"Next.js is an awesome React framework that gives you a lot out of the box!",
			date: "01-04-2022",
			slug: "next-js-whats-next",
		},
		{
			title: "File-based Routing in Next",
			image: "nextjs-file-based-routing.png",
			excerpt:
				"Creating pages in Next.js is easy! Just create folders and files and pages are automatically generated.",
			date: "01-05-2023",
			slug: "file-based-routing-in-next",
		},
	]
	return (
		<Fragment>
			<Hero />
			<FeaturedPosts posts={DUMMY_POSTS} />
		</Fragment>
	)
}

export default HomePage

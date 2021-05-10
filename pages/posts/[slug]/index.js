import { Fragment } from "react"
import Head from "next/head"
import PostContent from "../../../components/posts/post-detail/post-content/index"
import {
	getSinglePost,
	getAllPostFolderPaths,
} from "../../../helpers/posts-util"

function SinglePostPage(props) {
	const post = props.post

	return (
		<Fragment>
			<Head>
				<title>{props.post.data.title}</title>
				<meta name="description=" content={props.post.data.excerpt} />
			</Head>
			<PostContent content={post} />
		</Fragment>
	)
}

export default SinglePostPage

export async function getStaticPaths() {
	const paths = getAllPostFolderPaths()
	const staticPaths = paths.map((path) => {
		return { params: { slug: path } }
	})

	return {
		paths: staticPaths,
		fallback: false,
	}
}

export async function getStaticProps(context) {
	const { params } = context
	const { slug } = params
	const post = getSinglePost(slug)

	// console.log(post)
	return {
		props: { post: post },
		revalidate: 600,
	}
}

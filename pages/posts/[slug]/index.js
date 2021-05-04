import { Fragment } from "react"
import PostContent from "../../../components/posts/post-detail/post-content/index"
import {
	getSinglePost,
	getAllPostFolderPaths,
} from "../../../helpers/posts-util"

function SinglePostPage(props) {
	const post = props.post

	return (
		<Fragment>
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

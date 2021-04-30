import { Fragment } from "react"
import PostContent from "../../../components/posts/post-detail/post-content/index"

import DUMMY_DATA from "../../../DUMMY_DATA"

function SinglePostPage() {
	return (
		<Fragment>
			<PostContent content={DUMMY_DATA} />
		</Fragment>
	)
}

export default SinglePostPage

// export async function getStaticPaths() {
// 	return {
// 		paths: [
// 			{ params: { slug: "next-js-whats-next" } },
// 			{ params: { slug: "file-based-routing-in-next" } },
// 		],
// 		fallback: false,
// 	}
// }

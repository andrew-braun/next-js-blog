import { Fragment } from "react"
import PostContent from "../../../components/posts/post-detail/post-content/index"

import DUMMY_DATA from "../../../DUMMY_DATA"

function SinglePostPage(props) {
	console.log(props)
	return (
		<Fragment>
			<PostContent content={DUMMY_DATA} />
		</Fragment>
	)
}

export default SinglePostPage

import ReactMarkdown from "react-markdown"
import PostHeader from "../post-header/index"
import styles from "./post-content.module.css"

import DUMMY_DATA from "../../../../DUMMY_DATA"

function PostContent(props) {
	const { title, content, image, slug } = props.content[0]

	return (
		<article className={styles.postContent}>
			<PostHeader title={title} image={`/images/posts/${slug}/${image}`} />
			<div className={styles.postText}>
				<ReactMarkdown>{content}</ReactMarkdown>
			</div>
		</article>
	)
}

export default PostContent

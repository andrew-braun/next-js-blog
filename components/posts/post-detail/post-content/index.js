import ReactMarkdown from "react-markdown"
import PostHeader from "../post-header/index"
import styles from "./post-content.module.css"

// import DUMMY_DATA from "../../../../DUMMY_DATA"

function PostContent(props) {
	const post = props.content
	const { title, image, slug } = post.data
	const content = post.content

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

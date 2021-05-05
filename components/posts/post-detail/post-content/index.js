import ReactMarkdown from "react-markdown"
import Image from "next/image"
import PostHeader from "../post-header/index"
import styles from "./post-content.module.css"

// import DUMMY_DATA from "../../../../DUMMY_DATA"

function PostContent(props) {
	const post = props.content
	const { title, image, slug } = post.data
	const content = post.content

	const customRenderers = {
		p(paragraph) {
			const { node } = paragraph

			if (node.children[0].tagName === "img") {
				const image = node.children[0]

				return (
					<div className={styles.image}>
						<Image
							src={`/images/posts/${slug}/${image.properties.src}`}
							alt={image.alt}
							width={600}
							height={300}
							layout="responsive"
						/>
					</div>
				)
			}
			return <p>{paragraph.children}</p>
		},
	}

	return (
		<article className={styles.postContent}>
			<PostHeader title={title} image={`/images/posts/${slug}/${image}`} />
			<div className={styles.postText}>
				<ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
			</div>
		</article>
	)
}

export default PostContent

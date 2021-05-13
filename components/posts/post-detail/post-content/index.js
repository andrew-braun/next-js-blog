import ReactMarkdown from "react-markdown"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark"
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript"
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css"
import Image from "next/image"
import PostHeader from "../post-header/index"
import styles from "./post-content.module.css"

SyntaxHighlighter.registerLanguage("js", js)
SyntaxHighlighter.registerLanguage("css", css)

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
		code(code) {
			const { className, children } = code
			const language = className.split("-")[1]

			return (
				<SyntaxHighlighter
					language={language}
					children={children}
					style={atomDark}
				/>
			)
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

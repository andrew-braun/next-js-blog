import { getAllPosts } from "../../../helpers/posts-util"
import { getFeaturedPosts } from "../../../helpers/posts-util"

async function handler(req, res) {
	if (req.method === "GET") {
		let posts = []

		if (req.url.includes("featured=true")) {
			console.log(req.url)
			posts = getFeaturedPosts()
		} else {
			posts = getAllPosts()
		}

		res.status(200).json({ data: posts })
	}
}

export default handler

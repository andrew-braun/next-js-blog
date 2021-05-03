import { getAllPosts } from "../../../helpers/posts-util"

async function handler(req, res) {
	if (req.method === "GET") {
		const posts = getAllPosts()

		res.status(200).json({ data: posts })
	}
}

export default handler

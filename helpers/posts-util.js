import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content", "posts")

const imageExtensions = [
	".png",
	".jpg",
	".jpeg",
	".avif",
	".webp",
	".gif",
	".bmp",
	".tiff",
	".svg",
]

export function getFileData(folderName, fileName) {
	const filePath = path.join(
		process.cwd(),
		"content",
		"posts",
		folderName,
		fileName
	)

	const fileContent = fs.readFileSync(filePath, "utf-8")

	return fileContent
}

function parsePostFolder(folderName) {
	const folderPath = path.join(process.cwd(), "content", "posts", folderName)
	const folderContent = fs.readdirSync(folderPath)

	const postData = {}

	folderContent.forEach((file, index) => {
		const fileContent = getFileData(folderName, file)
		if ([".md", ".mdx"].includes(path.extname(file))) {
			const { data, content } = matter(fileContent)
			postData.data = data
			postData.content = content
		} else if (imageExtensions.includes(path.extname(file))) {
			postData[`image${index}`] = file
		}
	})

	return postData
}

export function getAllPosts() {
	const postFolders = fs.readdirSync(postsDirectory)

	const allPosts = postFolders.map((folder, index) => {
		return parsePostFolder(folder)
	})

	console.log(allPosts)
	return allPosts
}

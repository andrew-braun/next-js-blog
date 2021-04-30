import fs from "fs"
import path from "path"

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

function getPostData(folderName, fileName) {
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
		const fileContent = getPostData(folderName, file)
		if (path.extname(file) === ".md") {
			postData.markdown = fileContent
		} else if (imageExtensions.includes(path.extname(file))) {
			postData[`image${index}`] = file
		}
	})
	return postData
}

export function getAllPosts() {
	const postFolders = fs.readdirSync(postsDirectory)

	const allPosts = []

	postFolders.forEach((folder, index) => {
		allPosts.push(parsePostFolder(folder))
	})

	console.log(allPosts)
	// console.log(postFolders)
}

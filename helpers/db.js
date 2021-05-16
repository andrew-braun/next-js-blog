import { MongoClient } from "mongodb"

export async function connectToClient(res) {
	let client

	const env = process.env
	const mongodbUsername = process.env.mongodb_username,
		mongodbPassword = env.mongodb_password,
		mongodbClustername = env.mongodb_clustername,
		mongodbDatabase = env.mongodb_database

	const uri = `mongodb+srv://${mongodbUsername}:${mongodbPassword}@${mongodbClustername}.mf3oe.mongodb.net/${mongodbDatabase}?retryWrites=true&w=majority`

	client = await MongoClient.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})

	return client
}

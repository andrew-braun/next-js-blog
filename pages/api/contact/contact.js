import { MongoClient } from "mongodb"

import { validateEmail, validateText } from "../../../helpers/validation"

async function handler(req, res) {
	if (req.method === "POST") {
		const { email, name, message } = req.body

		// res.status(200).json({ email, name, message })
		if (
			!validateEmail(email) ||
			!validateText(name) ||
			!validateText(message)
		) {
			res.status(422).json({ message: "Invalid input" })
			return
		}

		const newMessage = { email, name, message }

		let client

		const env = process.env
		const mongodbUsername = env.mongodb_username,
			mongodbPassword = env.mongodb_password,
			mongodbClustername = env.mongodb_clustername,
			mongodbDatabase = env.mongodb_database
		console.log(mongodbUsername)

		const uri = `mongodb+srv://${mongodbUsername}:${mongodbPassword}@${mongodbClustername}.mf3oe.mongodb.net/${mongodbDatabase}?retryWrites=true&w=majority`

		try {
			client = await MongoClient.connect(uri, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
		} catch (error) {
			res.status(500).json({ error: "Could not connect to database" })
			return
		}

		const db = client.db()

		try {
			const result = await db.collection("contact-forms").insertOne(newMessage)
			newMessage.id = result.insertedId
		} catch (error) {
			client.close()
			res.status(500).json({ error: "Could not write to database" })
			return
		}

		client.close()

		res
			.status(201)
			.json({ status: "Successfully stored message!", message: newMessage })
	}
}

export default handler

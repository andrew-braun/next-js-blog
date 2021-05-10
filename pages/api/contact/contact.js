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
		const uri =
			"mongodb+srv://andrewbraun:next-blog-restricted-ip@cluster0.mf3oe.mongodb.net/Next-Blog?retryWrites=true&w=majority"

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

import { connectToClient } from "../../../helpers/db"
import { hashPassword } from "../../../helpers/auth"
import { validateEmail, validateText } from "../../../helpers/validation"

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return
	}

	const { email, password } = req.body
	if (!validateEmail(email) || !validateText(password)) {
		res.status(422).json({
			error: "Please make sure your email and password are valid.",
		})
		return
	}
	let client
	try {
		client = await connectToClient(res)
	} catch (error) {
		res.status(500).json({ message: "Could not connect to database" })
	}

	const db = client.db()

	const existingUser = await db.collection("users").findOne({ email: email })
	if (existingUser) {
		res.status(409).json({ message: "User already exists!" })
		client.close()
		return
	}

	const hashedPassword = await hashPassword(password)

	const result = await db.collection("users").insertOne({
		email: email,
		password: hashedPassword,
	})

	client.close()

	res.status(201).json({ message: "Successfully created user!" })
	return
}

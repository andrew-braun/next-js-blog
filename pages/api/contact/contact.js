import { validateEmail, validateText } from "../../../helpers/validation"

function handler(req, res) {
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

		res.status(201).json(newMessage)
	}
}

export default handler

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

function validateEmail(email) {
	return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
		email
	)
}

function validateText(text) {
	if (!text || text.trim().length === 0) {
		return false
	}
	return true
}

export default handler

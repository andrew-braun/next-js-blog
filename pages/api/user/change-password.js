import { getSession } from "next-auth/client"
import { connectToClient } from "../../../helpers/db"
import { comparePassword, hashPassword } from "../../../helpers/auth"

export default async function handler(req, res) {
	if (req.method !== "PATCH") {
		return
	}

	const session = await getSession({ req: req })

	if (!session) {
		res.status(401).json({ message: "No user logged in!" })
		return
	}

	const userEmail = session.user.email
	// const userEmail = req.body.email
	const { newPassword, oldPassword } = req.body

	const client = await connectToClient()
	const db = client.db()
	const users = db.collection("users")

	const user = await users.findOne({ email: userEmail })

	if (!user) {
		res.status(404).json({ message: "User not found!" })
		client.close()
		return
	}

	const passwordConfirmation = await comparePassword(oldPassword, user.password)

	if (!passwordConfirmation) {
		res.status(403).json({ message: "Incorrect password" })
		client.close()
		return
	}

	const hashedPassword = await hashPassword(newPassword)

	const result = await users.updateOne(
		{ email: userEmail },
		{ $set: { password: hashedPassword } }
	)

	client.close()
	res.status(200).json({ message: "Successfully set new password!" })
}

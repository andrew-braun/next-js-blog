import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { connectToClient } from "../../../helpers/db"
import { comparePassword } from "../../../helpers/auth"
import { validateEmail, validateText } from "../../../helpers/validation"

export default NextAuth({
	session: {
		jwt: true,
	},
	providers: [
		Providers.Credentials({
			async authorize(credentials, req) {
				const client = await connectToClient()
				const db = client.db()
				const usersCollection = db.collection("users")

				if (!credentials.email || !credentials.password) {
					return
				}

				const user = await usersCollection.findOne({
					email: credentials.email,
				})

				if (!user) {
					throw new Error("No user found!")
				}

				const inputPassword = credentials.password
				const hashedPassword = user.password
				const isValid = await comparePassword(inputPassword, hashedPassword)

				if (!isValid) {
					throw new Error("Could not log you in.")
				}

				client.close()

				return { email: user.email }
			},
		}),
	],
})

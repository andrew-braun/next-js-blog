import { Fragment } from "react"
import Head from "next/head"
import ContactForm from "../../components/ContactForm/ContactForm"

function ContactPage() {
	return (
		<Fragment>
			<Head>
				<title>Contact Me</title>
				<meta
					name="description"
					contents="Get in touch with me via my contact form!"
				/>
			</Head>
			<ContactForm />
		</Fragment>
	)
}

export default ContactPage

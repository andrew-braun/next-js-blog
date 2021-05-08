import { useState } from "react"
import { validateEmail, validateText } from "../../helpers/validation"
import styles from "./contact-form.module.css"

function ContactForm() {
	const [emailInput, setEmailInput] = useState("")
	const [nameInput, setNameInput] = useState("")
	const [messageInput, setMessageInput] = useState("")

	function contactFormSubmitHandler(event) {
		event.preventDefault()

		const email = emailInput,
			name = nameInput,
			message = messageInput

		if (
			!(validateEmail(email) || validateText(name) || validateText(message))
		) {
			return
		}

		console.log(email, name, message)

		fetch("/api/contact/contact", {
			method: "POST",
			body: JSON.stringify({ email: email, name: name, message: message }),
			headers: {
				"Content-Type": "application/json",
			},
		})
	}

	return (
		<section className={styles.contact}>
			<h1>Let's talk!</h1>
			<form className={styles.form}>
				<div className={styles.controls}>
					<div className={styles.control} id={styles.emailContainer}>
						<label htmlFor="email">Your Email</label>
						<input
							type="email"
							className={styles.email}
							id="email"
							placeholder="Your Email"
							value={emailInput}
							onChange={(event) => setEmailInput(event.target.value)}
							required
						/>
					</div>
					<div className={styles.control} id={styles.nameContainer}>
						<label htmlFor="name">Your Name</label>
						<input
							type="text"
							id="name"
							className={styles.name}
							placeholder="Your Name"
							value={nameInput}
							onChange={(event) => setNameInput(event.target.value)}
							required
						/>
					</div>
					<div className={styles.control} id={styles.messageContainer}>
						<label htmlFor="message">Your Message</label>
						<textarea
							className={styles.message}
							id="message"
							rows="5"
							placeholder="Your Message"
							value={messageInput}
							onChange={(event) => setMessageInput(event.target.value)}
							required
						/>
					</div>
				</div>
				<div className={styles.actions}>
					<button onClick={contactFormSubmitHandler}>Send Message</button>
				</div>
			</form>
		</section>
	)
}

export default ContactForm

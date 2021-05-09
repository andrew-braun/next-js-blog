import { useState, useEffect } from "react"
import { validateEmail, validateText } from "../../helpers/validation"
import Notification from "../ui/Notification/Notification"
import { Fragment } from "react"
import styles from "./contact-form.module.css"

function ContactForm() {
	const [emailInput, setEmailInput] = useState("")
	const [nameInput, setNameInput] = useState("")
	const [messageInput, setMessageInput] = useState("")
	const [requestStatus, setRequestStatus] = useState()
	const [requestError, setRequestError] = useState()

	async function sendContactData(contactDetails) {
		const response = await fetch("/api/contact/contact", {
			method: "POST",
			body: JSON.stringify(contactDetails),
			headers: {
				"Content-Type": "application/json",
			},
		})

		const data = await response.json()

		if (!response.ok) {
			const messageError = new Error(data.message) || "Something went wrong"

			throw messageError
		}
	}

	async function contactFormSubmitHandler(event) {
		event.preventDefault()

		const email = emailInput,
			name = nameInput,
			message = messageInput

		if (
			!(validateEmail(email) || validateText(name) || validateText(message))
		) {
			return
		}

		setRequestStatus("pending")

		const contactDetails = { email, name, message }

		try {
			await sendContactData(contactDetails)
			setRequestStatus("success")
			setEmailInput("")
			setNameInput("")
			setMessageInput("")
		} catch (error) {
			setRequestError(error)
			setRequestStatus("error")
		}
	}

	let notification

	if (requestStatus === "pending") {
		notification = {
			status: "pending",
			title: "Sending message",
			message: "Sending",
		}
	}

	if (requestStatus === "success") {
		notification = {
			status: "success",
			title: "Success!",
			message: "Your message has been sent!",
		}
	}

	if (requestStatus === "error") {
		notification = {
			status: "error",
			title: "Error",
			message: requestError,
		}
	}

	useEffect(() => {
		if (requestStatus === "success" || requestStatus === "error") {
			const timer = setTimeout(() => {
				setRequestStatus(null)
				setRequestError(null)
			}, 3000)
			return () => clearTimeout(timer)
		}
	}, [requestStatus])

	return (
		<Fragment>
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
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
		</Fragment>
	)
}

export default ContactForm

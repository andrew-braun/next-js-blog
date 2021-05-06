import styles from "./contact-form.module.css"

function ContactForm() {
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
							required
						/>
					</div>
				</div>
				<div className={styles.actions}>
					<button>Send Message</button>
				</div>
			</form>
		</section>
	)
}

export default ContactForm

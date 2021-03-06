import { useState, useRef } from "react"
import { signIn } from "next-auth/client"
import { useRouter } from "next/router"
import classes from "./auth-form.module.css"

function AuthForm() {
	const [isLogin, setIsLogin] = useState(true)

	const emailInputRef = useRef()
	const passwordInputRef = useRef()

	const router = useRouter()

	function switchAuthModeHandler() {
		setIsLogin((prevState) => !prevState)
	}

	async function createNewUser(email, password) {
		fetch("/api/auth/signup", {
			method: "POST",
			body: JSON.stringify({
				email: email,
				password: password,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})

		const data = await response.json()

		if (!response.ok) {
			throw new Error(data.message || "Something went wrong :(")
		}

		return data
	}

	async function submitHandler(event) {
		event.preventDefault()

		const enteredEmail = emailInputRef.current.value
		const enteredPassword = passwordInputRef.current.value

		if (isLogin) {
			// log user in
			const result = await signIn("credentials", {
				redirect: false,
				email: enteredEmail,
				password: enteredPassword,
			})
			if (!result.error) {
				// Set auth state
				router.replace("/profile")
			}

			return
		}

		try {
			const result = await createNewUser(enteredEmail, enteredPassword)
			console.log(result)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<section className={classes.auth}>
			<h1>{isLogin ? "Login" : "Sign Up"}</h1>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="email">Your Email</label>
					<input type="email" id="email" ref={emailInputRef} required />
				</div>
				<div className={classes.control}>
					<label htmlFor="password">Your Password</label>
					<input
						type="password"
						id="password"
						ref={passwordInputRef}
						required
					/>
				</div>
				<div className={classes.actions}>
					<button>{isLogin ? "Login" : "Create Account"}</button>
					<button
						type="button"
						className={classes.toggle}
						onClick={switchAuthModeHandler}
					>
						{isLogin ? "Create new account" : "Login with existing account"}
					</button>
				</div>
			</form>
		</section>
	)
}

export default AuthForm

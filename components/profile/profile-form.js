import { useRef } from "react"
import classes from "./profile-form.module.css"

function ProfileForm(props) {
	const newPasswordRef = useRef()
	const oldPasswordRef = useRef()

	function handlePasswordChangeSubmit(event) {
		event.preventDefault()

		props.onChangePassword({
			newPassword: newPasswordRef.current.value,
			oldPassword: oldPasswordRef.current.value,
		})
	}

	return (
		<form className={classes.form}>
			<div className={classes.control}>
				<label htmlFor="new-password">New Password</label>
				<input type="password" id="new-password" ref={newPasswordRef} />
			</div>
			<div className={classes.control}>
				<label htmlFor="old-password">Old Password</label>
				<input type="password" id="old-password" ref={oldPasswordRef} />
			</div>
			<div className={classes.action}>
				<button onClick={handlePasswordChangeSubmit}>Change Password</button>
			</div>
		</form>
	)
}

export default ProfileForm

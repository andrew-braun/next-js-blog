import { useState, useEffect } from "react"
import { useSession, getSession } from "next-auth/client"
import ProfileForm from "./profile-form"
import styles from "./user-profile.module.css"

function UserProfile() {
	// Redirect away if NOT auth
	// const [isLoading, setIsLoading] = useState(true)
	// const [loadedSession, setLoadedSession] = useState()

	// useEffect(() => {
	// 	getSession().then((session) => {
	// 		if (!session) {
	// 			window.location.href = "/auth"
	// 		}
	// 		setLoadedSession(session)
	// 		setIsLoading(false)
	// 	})
	// }, [])

	// const [session, loading] = useSession()

	// if (isLoading) {
	// 	return <p className={styles.profile}>Loading...</p>
	// }

	return (
		<section className={styles.profile}>
			<h1>Your User Profile</h1>
			<ProfileForm />
		</section>
	)
}

export default UserProfile

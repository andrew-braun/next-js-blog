import Link from "next/link"
import Logo from "./logo"
import { useSession, signOut } from "next-auth/client"
import styles from "./main-nav.module.css"

function MainNav() {
	const [session, loading] = useSession()

	function logoutHandler() {
		signOut()
	}

	return (
		<header className={styles.mainHeader}>
			<div className={styles.logo}>
				<Link href="/">
					<a>
						<Logo />
					</a>
				</Link>
			</div>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<Link href="/posts">Posts</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/contact">Contact</Link>
					</li>
					{!session && !loading && (
						<li className={styles.navItem}>
							<Link href="/auth">Login</Link>
						</li>
					)}
					{session && (
						<li className={styles.navItem}>
							<Link href="/profile">Profile</Link>
						</li>
					)}
					{session && (
						<li className={styles.navItem}>
							<button onClick={logoutHandler}>Log Out</button>
						</li>
					)}
				</ul>
			</nav>
		</header>
	)
}

export default MainNav

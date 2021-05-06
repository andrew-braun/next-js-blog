import Link from "next/link"
import Logo from "./logo"
import styles from "./main-nav.module.css"

function MainNav() {
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
				</ul>
			</nav>
		</header>
	)
}

export default MainNav

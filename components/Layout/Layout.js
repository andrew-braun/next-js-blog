import MainNav from "./MainNav"
import { Fragment } from "react"

function Layout(props) {
	return (
		<Fragment>
			<MainNav />
			<main>{props.children}</main>
		</Fragment>
	)
}

export default Layout

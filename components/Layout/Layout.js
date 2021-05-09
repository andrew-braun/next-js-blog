import MainNav from "./MainNav"
import { Fragment } from "react"

function Layout(props) {
	return (
		<Fragment>
			<MainNav />
			<main>{props.children}</main>
			<div id="notifications"></div>
		</Fragment>
	)
}

export default Layout

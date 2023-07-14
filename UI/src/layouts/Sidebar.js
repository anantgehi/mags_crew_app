import { Button, Nav, NavItem } from "reactstrap"
import { Link, useLocation } from "react-router-dom"

const navigation = [
	{
		title: "Dashboard",
		href: "/Home",
		icon: "bi bi-speedometer2",
	},
	{
		title: "About",
		href: "/about",
		icon: "bi bi-people",
	},
]

const Sidebar = () => {
	const showMobilemenu = () => {
		document.getElementById("sidebarArea").classList.toggle("showSidebar")
	}
	let location = useLocation()

	return (
		<div className="bg-dark">
			<div className="d-flex">
				<Button color="white" className="ms-auto text-white d-lg-none" onClick={() => showMobilemenu()}>
					<i className="bi bi-x"></i>
				</Button>
			</div>
			<div className="p-3 mt-2">
				<Nav vertical className="sidebarNav">
					{navigation.map((navi, index) => (
						<NavItem key={index} className="sidenav-bg">
							<Link to={navi.href} className={location.pathname === navi.href ? "active nav-link py-3" : "nav-link py-3"}>
								<i className={navi.icon}></i>
								<span className="ms-3 d-inline-block">{navi.title}</span>
							</Link>
						</NavItem>
					))}
					{/* <Button color="danger" tag="a" target="_blank" className="mt-3" href="https://www.lipsum.com/">
						Lorem Ipsum
					</Button> */}
				</Nav>
			</div>
		</div>
	)
}

export default Sidebar

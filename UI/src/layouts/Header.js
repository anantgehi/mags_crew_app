import React from "react"
import { Link } from "react-router-dom"
import {
	Navbar,
	Collapse,
	Nav,
	NavItem,
	NavbarBrand,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Dropdown,
	Button,
} from "reactstrap"
import user1 from "../assets/images/users/user4.jpg"

const Header = () => {
	const [isOpen, setIsOpen] = React.useState(false)

	const [dropdownOpen, setDropdownOpen] = React.useState(false)

	const toggle = () => setDropdownOpen((prevState) => !prevState)
	const Handletoggle = () => {
		setIsOpen(!isOpen)
	}
	const showMobilemenu = () => {
		document.getElementById("sidebarArea").classList.toggle("showSidebar")
	}
	return (
		<Navbar color="white" light expand="md" className="fix-header">
			<div className="d-flex align-items-center">
				<Button color="dark" className=" d-lg-none m-2" onClick={() => showMobilemenu()}>
					<i className="bi bi-list"></i>
				</Button>
				<NavbarBrand href="/">Mag's Crew AI</NavbarBrand>
			</div>
			<div className="hstack gap-2">
				<Button color="primary" size="sm" className="d-sm-block d-md-none" onClick={Handletoggle}>
					{isOpen ? <i className="bi bi-x"></i> : <i className="bi bi-three-dots-vertical"></i>}
				</Button>
			</div>

			<Collapse navbar isOpen={isOpen}>
				<Nav className="me-auto" navbar>
					<NavItem>
						<Link to="/Home" className="nav-link">
							Home
						</Link>
					</NavItem>
					<NavItem>
						<Link to="/about" className="nav-link">
							About
						</Link>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	)
}

export default Header

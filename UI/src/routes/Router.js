import { lazy } from "react"
import { Navigate } from "react-router-dom"

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"))

/***** Pages ****/

const Home = lazy(() => import("../views/Home.js"))
const About = lazy(() => import("../views/About.js"))

/*****Routes******/

const ThemeRoutes = [
	{
		path: "/",
		element: <FullLayout />,
		children: [
			{ path: "/", element: <Navigate to="/Home" /> },
			{ path: "/Home", exact: true, element: <Home /> },
			{ path: "/about", exact: true, element: <About /> },
		],
	},
]

export default ThemeRoutes

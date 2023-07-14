import { Col, Row } from "reactstrap"
import SalesChart from "../components/dashboard/SalesChart"
import Feeds from "../components/dashboard/Feeds"
import ProjectTables from "../components/dashboard/ProjectTable"
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {

	const [query, setQuery] = useState(1);

	const [data, setData] = useState([]);

	useEffect(() => {
		getData(query)
	});

	function getData(query) {
		axios.get(`stackoverflow/${query}`)
		  .then(res => {
			console.log(res.data)
			setData(res.data)
		  })
	}

	return (
		<div>
			{/***Top Cards***/}

			{/***Sales & Feed***/}
			<Row>
				<Col sm="6" lg="6" xl="7" xxl="8">
					<SalesChart />
				</Col>
				<Col sm="6" lg="6" xl="5" xxl="4">
					<Feeds />
				</Col>
			</Row>
			{/***Table ***/}
			<Row>
				<Col lg="12">
					<ProjectTables data={data}/>
				</Col>
			</Row>
		</div>
	)
}

export default Home

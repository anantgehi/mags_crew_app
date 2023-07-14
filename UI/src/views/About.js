import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap"

const About = () => {
	return (
		<Row>
			<Col>
				{/* --------------------------------------------------------------------------------*/}
				{/* Card-1*/}
				{/* --------------------------------------------------------------------------------*/}
				<Card>
					<CardTitle tag="h6" className="border-bottom p-3 mb-0">
						<i className="bi bi-bell me-2"> </i>
						About Mag's Crew AI
					</CardTitle>
					<CardBody className="p-4">
						<Row justify-content>
							<Col lg="12">
								<h2 className="mt-4">Mag's Crew AI</h2>
								<h5 className=" mb-4">
									It is a long established fact that a reader will be distracted by the readable content of a page when looking at
									its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
									opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
									packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
									uncover many web sites still in their infancy
								</h5>
								<Button className="mt-3" color="primary" href="https://www.lipsum.com/" target="_blank">
									Mag's Crew AI
								</Button>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
		</Row>
	)
}

export default About

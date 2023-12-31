import { Card, CardBody, CardSubtitle, CardTitle, Row, Col } from "reactstrap"
import Chart from "react-apexcharts"

const SalesChart = (props) => {
	const data = props.data || []
	const chartData = [
		{ field: "Stored", value: data.filter((a) => a.Status === "Stored").length },
		{ field: "In Progress", value: data.filter((a) => a.Status === "In Progress").length },
		{ field: "Processed", value: data.filter((a) => a.Status === "Processed").length },
		{ field: "Not Applicable", value: data.filter((a) => a.Status === "Not Applicable").length },
	]
	const options = {
		plotOptions: {
			radialBar: {
				dataLabels: {
					total: {
						show: true,
						label: "TOTAL",
					},
				},
			},
		},
		labels: chartData.map((data) => data.field),
	}
	const series = chartData.map((data) => data.value)

	return (
		<Card style={{ overflow: "auto", height: "500px" }}>
			<CardBody>
				<CardTitle tag="h5">Document Summary</CardTitle>
				<CardSubtitle className="text-muted" tag="h6">
					Yearly Report
				</CardSubtitle>
				<div className="bg-primary text-white my-3 p-3 rounded">
					<Row>
						{chartData.map((data) => {
							return (
								<Col md="3">
									<h6>{data.field}</h6>
									<h4 className="mb-0 fw-bold">{data.value}</h4>
								</Col>
							)
						})}
					</Row>
				</div>
				<Chart options={options} series={series} type="donut" height="280" />
			</CardBody>
		</Card>
	)
}

export default SalesChart

import { Card, CardBody, CardSubtitle, CardTitle, Row, Col } from "reactstrap"
import Chart from "react-apexcharts"

const chartData = [
	{ field: "Stored", value: 70 },
	{ field: "In Progress", value: 80 },
	{ field: "Processed", value: 50 },
	{ field: "Not Applicable", value: 60 },
]

const SalesChart = () => {
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
		<Card>
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
				<Chart options={options} series={series} type="radialBar" height="280" />
			</CardBody>
		</Card>
	)
}

export default SalesChart

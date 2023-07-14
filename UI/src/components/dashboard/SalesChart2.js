import { Card, CardBody, CardSubtitle, CardTitle, Row, Col } from "reactstrap"
import Chart from "react-apexcharts"

const SalesChart2 = (props) => {
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
		<Card>
			<CardBody>
				<CardTitle tag="h5">Document Abstract</CardTitle>
				<CardSubtitle className="text-muted" tag="h6">
					Annual Insights (per 100)
				</CardSubtitle>
				<Chart options={options} series={series} type="bar" height="280" />
			</CardBody>
		</Card>
	)
}

export default SalesChart2

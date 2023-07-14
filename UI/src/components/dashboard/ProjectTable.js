import { useEffect } from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap"

const columns = [
	"Ticket id",
	"Document id",
	"Document Type",
	"Garnishee",
	"Debtor",
	"Creditor",
	"Debtor Bank",
	"Debtor Account",
	"Creditor Bank",
	"Creditor Account",
	"Amount",
	"Currency",
	"Protection",
	"Status",
	"Date Time",
	"PDF Document",
]

const ProjectTables = (props) => {
	useEffect(() => {
		console.log(props.data)
	});
	return (
		<div>
			<Card>
				<CardBody>
					<CardTitle tag="h5">Document Listing</CardTitle>
					<CardSubtitle className="mb-2 text-muted" tag="h6">
						Overview of the documents - {props.data.map((dt)=>dt.Creditor)}
					</CardSubtitle>
					<Table className="no-wrap mt-3 align-middle" responsive borderless>
						<thead>
							<tr>
								{columns.map((column) => {
									return <th key={column}>{column}</th>
								})}
							</tr>
						</thead>
						<tbody>
							{props.data.map((tableData, index) => (
								<tr key={index} className="border-top">
									<td>{tableData.Ticketid}</td>
									<td>{tableData.Documentid}</td>
									<td>{tableData.Dcoument_Type}</td>
									<td>{tableData.Garnishee}</td>
									<td>{tableData.Debtor}</td>
									<td>{tableData.Creditor}</td>
									<td>{tableData.Debtor_Bank}</td>
									<td>{tableData.Debtor_Account}</td>
									<td>{tableData.Creditor_Bank}</td>
									<td>{tableData.Creditor_Account}</td>
									<td>{tableData.Amount}</td>
									<td>{tableData.Currency}</td>
									<td>{tableData.Protection?"Yes":"No"}</td>
									<td>{tableData.Status}</td>
									<td>{tableData.DateTime.value}</td>
									<td>{tableData.PDF_Document?"Available":"Unavailable"}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</CardBody>
			</Card>
		</div>
	)
}

export default ProjectTables

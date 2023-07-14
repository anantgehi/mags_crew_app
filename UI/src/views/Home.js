import { Col, Row } from "reactstrap"
import SalesChart from "../components/dashboard/SalesChart"
import Feeds from "../components/dashboard/Feeds"
import ProjectTables from "../components/dashboard/ProjectTable"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import SalesChart2 from "../components/dashboard/SalesChart2"

const Home = () => {
	const [query, setQuery] = useState(1)

	const [data, setData] = useState([
		{
			Ticketid: "TK289",
			Documentid: "D394",
			Dcoument_Type: "Loan",
			Garnishee: "Bank",
			Debtor: "John Doe",
			Creditor: "ABC Bank",
			Debtor_Bank: "XYZ Bank",
			Debtor_Account: "123456",
			Creditor_Bank: "ABC Bank",
			Creditor_Account: "567890",
			Amount: "750",
			Currency: "USD",
			Protection: "No",
			Status: "Stored",
			DateTime: { value: "14-07-2023 09:30:15" },
			PDF_Document: "",
		},
		{
			Ticketid: "TK561",
			Documentid: "D743",
			Dcoument_Type: "Mortgage",
			Garnishee: "Lender",
			Debtor: "Jane Smith",
			Creditor: "XYZ Bank",
			Debtor_Bank: "PQR Bank",
			Debtor_Account: "987654",
			Creditor_Bank: "XYZ Bank",
			Creditor_Account: "567890",
			Amount: "2500",
			Currency: "USD",
			Protection: "Yes",
			Status: "In Progress",
			DateTime: { value: "14-07-2023 10:45:20" },
			PDF_Document: "",
		},
		{
			Ticketid: "TK902",
			Documentid: "D175",
			Dcoument_Type: "Tax Return",
			Garnishee: "IRS",
			Debtor: "Michael Johnson",
			Creditor: "IRS",
			Debtor_Bank: "ABC Bank",
			Debtor_Account: "654321",
			Creditor_Bank: "IRS",
			Creditor_Account: "888888",
			Amount: "1200",
			Currency: "USD",
			Protection: "No",
			Status: "Processed",
			DateTime: { value: "14-07-2023 12:15:05" },
			PDF_Document: "",
		},
		{
			Ticketid: "TK457",
			Documentid: "D613",
			Dcoument_Type: "Credit Card Statement",
			Garnishee: "Bank",
			Debtor: "Emily Brown",
			Creditor: "XYZ Bank",
			Debtor_Bank: "PQR Bank",
			Debtor_Account: "456789",
			Creditor_Bank: "XYZ Bank",
			Creditor_Account: "111111",
			Amount: "300",
			Currency: "USD",
			Protection: "No",
			Status: "Not Applicable",
			DateTime: { value: "14-07-2023 13:50:30" },
			PDF_Document: "",
		},
		{
			Ticketid: "TK633",
			Documentid: "D829",
			Dcoument_Type: "Loan",
			Garnishee: "Bank",
			Debtor: "Sarah Johnson",
			Creditor: "ABC Bank",
			Debtor_Bank: "PQR Bank",
			Debtor_Account: "987654",
			Creditor_Bank: "ABC Bank",
			Creditor_Account: "222222",
			Amount: "1500",
			Currency: "USD",
			Protection: "Yes",
			Status: "Stored",
			DateTime: { value: "14-07-2023 15:20:10" },
			PDF_Document: "",
		},
		{
			Ticketid: "TK111",
			Documentid: "D238",
			Dcoument_Type: "Invoice",
			Garnishee: "Company X",
			Debtor: "David Wilson",
			Creditor: "Company X",
			Debtor_Bank: "ABC Bank",
			Debtor_Account: "654321",
			Creditor_Bank: "Company X",
			Creditor_Account: "333333",
			Amount: "1000",
			Currency: "USD",
			Protection: "No",
			Status: "Stored",
			DateTime: { value: "14-07-2023 16:40:55" },
			PDF_Document: "",
		},
		{
			Ticketid: "TK789",
			Documentid: "D927",
			Dcoument_Type: "Rent Agreement",
			Garnishee: "Landlord",
			Debtor: "Daniel Thompson",
			Creditor: "Landlord",
			Debtor_Bank: "PQR Bank",
			Debtor_Account: "789654",
			Creditor_Bank: "Landlord",
			Creditor_Account: "444444",
			Amount: "800",
			Currency: "USD",
			Protection: "No",
			Status: "In Progress",
			DateTime: { value: "14-07-2023 17:55:25" },
			PDF_Document: "",
		},
		{
			Ticketid: "TK222",
			Documentid: "D359",
			Dcoument_Type: "Insurance Claim",
			Garnishee: "Insurance Company",
			Debtor: "Olivia Davis",
			Creditor: "Insurance Company",
			Debtor_Bank: "XYZ Bank",
			Debtor_Account: "123456",
			Creditor_Bank: "Insurance Company",
			Creditor_Account: "555555",
			Amount: "2000",
			Currency: "USD",
			Protection: "No",
			Status: "Processed",
			DateTime: { value: "14-07-2023 19:10:40" },
			PDF_Document: "",
		},
		{
			Ticketid: "TK444",
			Documentid: "D512",
			Dcoument_Type: "Medical Bill",
			Garnishee: "Hospital",
			Debtor: "Sophia Wilson",
			Creditor: "Hospital",
			Debtor_Bank: "ABC Bank",
			Debtor_Account: "654789",
			Creditor_Bank: "Hospital",
			Creditor_Account: "666666",
			Amount: "1200",
			Currency: "USD",
			Protection: "Yes",
			Status: "Not Applicable",
			DateTime: { value: "14-07-2023 20:25:50" },
			PDF_Document: "",
		},
		{
			Ticketid: "TK555",
			Documentid: "D634",
			Dcoument_Type: "Loan",
			Garnishee: "Bank",
			Debtor: "Liam Miller",
			Creditor: "ABC Bank",
			Debtor_Bank: "XYZ Bank",
			Debtor_Account: "987654",
			Creditor_Bank: "ABC Bank",
			Creditor_Account: "777777",
			Amount: "5000",
			Currency: "USD",
			Protection: "Yes",
			Status: "Stored",
			DateTime: { value: "14-07-2023 21:40:35" },
			PDF_Document: "",
		},
		{
			Ticketid: "TK777",
			Documentid: "D836",
			Dcoument_Type: "Divorce Decree",
			Garnishee: "Court",
			Debtor: "Emma Anderson",
			Creditor: "Court",
			Debtor_Bank: "PQR Bank",
			Debtor_Account: "987654",
			Creditor_Bank: "Court",
			Creditor_Account: "888888",
			Amount: "N/A",
			Currency: "N/A",
			Protection: "No",
			Status: "Processed",
			DateTime: { value: "14-07-2023 22:55:15" },
			PDF_Document: "",
		},
		{
			Ticketid: "TK888",
			Documentid: "D948",
			Dcoument_Type: "Credit Card Statement",
			Garnishee: "Bank",
			Debtor: "James Brown",
			Creditor: "XYZ Bank",
			Debtor_Bank: "ABC Bank",
			Debtor_Account: "654321",
			Creditor_Bank: "XYZ Bank",
			Creditor_Account: "999999",
			Amount: "300",
			Currency: "USD",
			Protection: "No",
			Status: "Processed",
			DateTime: { value: "14-07-2023 23:40:05" },
			PDF_Document: "",
		},
		{
			Ticketid: "TK999",
			Documentid: "D173",
			Dcoument_Type: "Income Tax",
			Garnishee: "IRS",
			Debtor: "Ava Taylor",
			Creditor: "IRS",
			Debtor_Bank: "PQR Bank",
			Debtor_Account: "789654",
			Creditor_Bank: "IRS",
			Creditor_Account: "101010",
			Amount: "1500",
			Currency: "USD",
			Protection: "Yes",
			Status: "Stored",
			DateTime: { value: "15-07-2023 00:25:30" },
			PDF_Document: "",
		},
	])

	useEffect(() => {
		setInterval(() => {
			getData(query)
		}, 5000)
	}, [])

	function getData(query) {
		axios.get(`stackoverflow/${query}`).then((res) => {
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
					<SalesChart data={data} />
				</Col>
				<Col sm="6" lg="6" xl="5" xxl="4">
					<Feeds data={data} />
				</Col>
			</Row>
			{/***Table ***/}
			<Row>
				<Col lg="12">
					<ProjectTables data={data} />
				</Col>
			</Row>
		</div>
	)
}

export default Home

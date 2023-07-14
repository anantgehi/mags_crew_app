import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
} from "reactstrap";

const columns = [
	"Ticket Id",
	"Status",
]

const FeedData = [
  {
    Ticketid: "SL1",
    status: "In Progress",
  },
  {
    Ticketid: "SL2",
    status: "In Progress",
  },
{
    Ticketid: "SL3",
    status: "In Progress",
  },
  {
    Ticketid: "SL4",
    status: "In Progress",
  },
  {
    Ticketid: "SL5",
    status: "In Progress",
  },
  {
    Ticketid: "SL6",
    status: "In Progress",
  },
  {
    Ticketid: "SL7",
    status: "In Progress",
  },
  {
    Ticketid: "SL8",
    status: "In Progress",
  },
  {
    Ticketid: "SL9",
    status: "In Progress",
  },
  {
    Ticketid: "SL10",
    status: "In Progress",
  },
  {
    Ticketid: "SL11",
    status: "In Progress",
  },
  {
    Ticketid: "SL12",
    status: "In Progress",
  },
];

const Feeds = () => {
  return (
    <Card style={{overflow:'auto',height:'450px'}}>
      <CardBody>
        <CardTitle tag="h5">Feeds</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Widget you can use
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
							{FeedData.map((FeedData, index) => (
								<tr key={index} className="border-top">
									<td>{FeedData.Ticketid}</td>
									<td>{FeedData.status}</td>
								</tr>
							))}
						</tbody>
					</Table>
      </CardBody>
    </Card>
  );
};

export default Feeds;

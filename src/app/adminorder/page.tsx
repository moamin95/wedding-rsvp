"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TableDemo() {
  const [tableData, setTableData] = useState([]);
  const [guestTotal, setGuestTotal] = useState(0);

  const columnWidths = {
    name: 'w-1/3',
    guests: 'w-1/6',
    song: 'w-1/3',
    attending: 'w-1/6',
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("/api/get-reservation", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const reservations = data.rows;

      const total = reservations.reduce(
        (sum: any, row: { guests: any }) => sum + row.guests,
        0
      );
      setGuestTotal(total);

      setTableData(reservations);
    } catch (error) {
      console.error("Error Fetching Data:", error);
    }
  };

  return (
    <Table className="">
      <TableCaption className="text-soft">A list of your wedding guests.</TableCaption>
      <TableHeader className="text-soft">
        <TableRow >
          <TableHead className={columnWidths.name}>Name</TableHead>
          <TableHead className={columnWidths.guests}>Guests</TableHead>
          <TableHead className={columnWidths.song}>Song</TableHead>
          <TableHead className={`${columnWidths.attending} text-right`}>Attending</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map(
          (row: {
            name: string;
            guests: number;
            song: string;
            attending: boolean;
          }) => (
            <TableRow key={row.name} className="text-soft">
              <TableCell className={`${columnWidths.name} font-medium`}>{row.name}</TableCell>
              <TableCell className={columnWidths.guests}>{row.guests}</TableCell>
              <TableCell className={columnWidths.song}>{row.song}</TableCell>
              <TableCell className={`${columnWidths.attending} text-right`}>
                {row.attending ? "Yes" : "No"}
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{guestTotal}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

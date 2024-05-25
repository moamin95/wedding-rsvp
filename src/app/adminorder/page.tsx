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
    <Table>
      <TableCaption>A list of your wedding guests.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Guests</TableHead>
          <TableHead>Song</TableHead>
          <TableHead className="text-right">Attending</TableHead>
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
            <TableRow key={row.name}>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell>{row.guests}</TableCell>
              <TableCell>{row.song}</TableCell>
              <TableCell className="text-right">
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

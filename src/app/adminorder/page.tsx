'use client';

import { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Reservation = {
  name: string;
  guests: number;
  song: string;
  team: string;
  attending: boolean;
};

export default function TableDemo() {
  const [tableData, setTableData] = useState<Reservation[]>([]);
  const [filteredData, setFilteredData] = useState<Reservation[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [teamFilter, setTeamFilter] = useState('all');
  const [attendingFilter, setAttendingFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const columnWidths = {
    name: 'w-1/3',
    guests: 'w-1/8',
    song: 'w-1/3',
    team: 'w-1/8',
    attending: 'w-1/8',
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [teamFilter, attendingFilter, searchTerm, tableData]);

  const getData = async () => {
    try {
      const response = await fetch('/api/get-reservation', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const reservations: Reservation[] = data.rows;

      setTableData(reservations);
      setFilteredData(reservations);
    } catch (error) {
      console.error('Error Fetching Data:', error);
    }
  };

  const applyFilters = () => {
    let filtered = [...tableData];

    if (teamFilter !== 'all') {
      filtered = filtered.filter((row) => row.team === teamFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter((row) => row.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (attendingFilter !== 'all') {
      const attending = attendingFilter === 'yes';
      filtered = filtered.filter((row) => row.attending === attending);
    }

    setFilteredData(filtered);
  };

  const handleSort = () => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.guests - b.guests;
      } else {
        return b.guests - a.guests;
      }
    });

    setFilteredData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const totalGuests = filteredData.reduce((sum, row) => sum + row.guests, 0);

  const handleDelete = async () => {
    try {
      const response = await fetch('/api/delete-reservation', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      getData();
    } catch (error) {
      console.error('Error Deleting Data:', error);
    }
  };

  return (
    <div className="bg-soft py-24 px-4 lg:p-36 flex flex-col justify-center items-center">
      <div className="flex gap-4 mb-4 min-w-full">
        <Input type="text" placeholder="Search by Name" className="flex-grow" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Select onValueChange={setTeamFilter} value={teamFilter}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Filter by Team" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">Team</SelectItem>
              <SelectItem value="bride">Team Bride</SelectItem>
              <SelectItem value="groom">Team Groom</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onValueChange={setAttendingFilter} value={attendingFilter}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Filter by Attending" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="yes">Attending</SelectItem>
              <SelectItem value="no">Not Attending</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Table className="">
        <TableCaption className="text-onyx">A list of your wedding guests.</TableCaption>
        <TableHeader className="text-onyx">
          <TableRow>
            <TableHead className={columnWidths.name}>Name</TableHead>
            <TableHead className={`${columnWidths.guests} cursor-pointer`} onClick={handleSort}>
              Guests {sortOrder === 'asc' ? '↑' : '↓'}
            </TableHead>
            <TableHead className={`${columnWidths.song} hidden md:table-cell`}>Song</TableHead>
            <TableHead className={columnWidths.team}>Team</TableHead>
            <TableHead className={`${columnWidths.attending} text-right`}>Attending</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((row) => (
            <TableRow key={row.name} className="text-onyx">
              <TableCell className={`${columnWidths.name} font-medium`}>{row.name}</TableCell>
              <TableCell className={columnWidths.guests}>{row.guests}</TableCell>
              <TableCell className={`${columnWidths.song} hidden md:table-cell`}>{row.song}</TableCell>
              <TableCell className={`${columnWidths.team} capitalize`}>{row.team}</TableCell>
              <TableCell className={`${columnWidths.attending} text-right`}>{row.attending ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">{totalGuests}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <button className="mt-10 bg-[#353935] text-white text-sm p-2 uppercase rounded-md hover:bg-gray-800 transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg" onClick={handleDelete}>
        Delete All
      </button>
    </div>
  );
}

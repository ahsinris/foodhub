import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography, Box } from '@mui/material';

const data = [
  {
    id: 1,
    addres: '',
    from: 'sds',
    status: '1',
    paidStatus: 0,
    image: 'url',
    orderType: 1,
    timestamp: 1724146835,
  },
  {
    id: 2,
    addres: '',
    from: 'sds',
    status: '1',
    paidStatus: 0,
    image: 'url',
    orderType: 2,
    timestamp: 1724146835,
  },
  {
    id: 3,
    addres: '',
    from: 'sds',
    status: '1',
    paidStatus: 0,
    image: 'url',
    orderType: 1,
    timestamp: 1724146888,
  },
  {
    id: 4,
    addres: '',
    from: 'sds',
    status: '2',
    paidStatus: 0,
    image: 'url',
    orderType: 1,
    timestamp: 1724146558,
  },
];

const filteredData = data.filter((item) => item.status === '2');

const SecondTable = () => {
  // Calculate the current timestamp only once
  const newTimestamp = Math.floor(Date.now() / 1000);

  // Function to calculate the difference in minutes
  const calculateTimeDifference = (timestamp) => {
    const differenceInSeconds = newTimestamp - timestamp;
    return Math.floor(differenceInSeconds / 60);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {filteredData.map((row) => (
            <TableRow key={row.id}>
              <TableCell
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", gap: "50px" }}>
                  <Typography variant="body2">{row.id}</Typography>

                  <Typography variant="body2">
                    {row.orderType === 1 ? "In-store" : "Online"}
                  </Typography>
                </Box>
                <Box
                  sx={{ bgcolor: "red", padding: "10px", borderRadius: "5px" }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: "white", fontWeight: 600 }}
                  >
                    {calculateTimeDifference(row.timestamp)}
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SecondTable;

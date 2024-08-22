import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography, Box, TextField, Button } from '@mui/material';

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
  {
    id: 5,
    addres: '',
    from: 'sds',
    status: '3',
    paidStatus: 0,
    image: 'url',
    orderType: 0,
    timestamp: 1724146558,
  },
];

const filteredData = data.filter((item) => item.status === '3');

const ThirdTable = () => {
  const [inputValues, setInputValues] = useState({});

  // Handle input change for a specific row
  const handleInputChange = (id, value) => {
    setInputValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle submit for a specific row
  const handleSubmit = (id) => {
    console.log(`Submitted for ID ${id}: ${inputValues[id]}`);
    // Add your submission logic here
  };

  const newTimestamp = Math.floor(Date.now() / 1000);

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
              <TableCell sx={{ display: 'block' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '50px' }}>
                  {/* <Typography variant="body2">{row.id}</Typography> */}
                  {/* <Typography variant="body2">{row.orderType === 1 ? 'In-store' : 'Online'}</Typography> */}
                </Box>
                <Box sx={{ bgcolor: 'white', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
                  {/* <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
                    {calculateTimeDifference(row.timestamp)}
                  </Typography> */}
                </Box>
                <Box sx={{ display: 'flex', gap: '10px', marginBottom: '10px', flexDirection: 'column' }}>
                  <TextField
                    label="Enter text"
                    variant="outlined"
                    size="small"
                    value={inputValues[row.id] || ''}
                    onChange={(e) => handleInputChange(row.id, e.target.value)}
                    sx={{ width: '100%' }} // Adjust width here
                    multiline // Allows text to wrap to the next line
                    rows={4} // Number of rows in the text box
                  />
                  <Button variant="contained" color="primary" onClick={() => handleSubmit(row.id)} sx={{ alignSelf: 'flex-start' }}>
                    Submit
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ThirdTable;

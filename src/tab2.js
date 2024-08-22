import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography, Box, Button, TextField } from "@mui/material";

const data1 = {
  message: "Success",
  data: {
    requested: [
      {
        _id: "66c777ddd3bdd1a66da91da5",
        user_id: "8",
        store_id: "8",
        status: "REQUESTED",
        is_read: false,
        created_at: "Thu Aug 22 2024 23:09:41 GMT+0530 (India Standard Time)",
        __v: 0,
        user_info: {
          name: "John Doe",
          email: "john.doe@example.com",
        },
      },
      {
        _id: "66c766424f59b7624989e2bb",
        user_id: "7",
        store_id: "8",
        status: "REQUESTED",
        is_read: false,
        created_at: "Thu Aug 22 2024 21:54:34 GMT+0530 (India Standard Time)",
        __v: 0,
        user_info: {
          name: "Jane Smith",
          email: "jane.smith@example.com",
        },
      },
    ],
    accepted: [
      {
        _id: "66c7664f2af8c1dd3265a2f7",
        user_id: "8",
        store_id: "8",
        status: "ACCEPTED",
        is_read: false,
        created_at: "Thu Aug 22 2024 21:54:47 GMT+0530 (India Standard Time)",
        __v: 0,
        user_info: {
          name: "Alice Johnson",
          email: "alice.johnson@example.com",
        },
      },
    ],
  },
};

const SecondTable = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (userId) => {
    console.log(`Submitted for user ${userId} with input: ${inputValue}`);
    // Add your submit logic here
  };

  const renderRows = (items, statusMessage) => {
    return items.map((item) => (
      <TableRow key={item._id}>
        <TableCell sx={{ display: "block" }}>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography variant="body2">
              {`${item.user_info.name} (${item.user_info.email}) has been ${statusMessage}`}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <TextField
              label="coupon code"
              variant="outlined"
              size="small"
              value={inputValue}
              onChange={handleInputChange}
              sx={{ marginBottom: "10px" }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSubmit(item.user_id)}
            >
              Submit
            </Button>
          </Box>
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {/* Render Requested Rows */}
          {renderRows(data1.data.requested, "requested for offer")}
          {/* Render Accepted Rows */}
          {renderRows(data1.data.accepted, "accepted")}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SecondTable;

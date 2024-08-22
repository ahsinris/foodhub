import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";

const data = [
  {
    id: 1,
    addres: "",
    from: "sds",
    status: "1",
    paidStatus: 0,
    image: "url",
    orderType: 1,
    timestamp: 1724146835,
  },
  {
    id: 2,
    addres: "",
    from: "sds",
    status: "1",
    paidStatus: 0,
    image: "url",
    orderType: 2,
    timestamp: 1724146835,
  },
  {
    id: 3,
    addres: "",
    from: "sds",
    status: "1",
    paidStatus: 0,
    image: "url",
    orderType: 1,
    timestamp: 1724146888,
  },
];

const data1 = {
  message: "Success",
  data: {
    list: [
      {
        _id: "66c769a88044d69533712d19",
        user_id: "8",
        store_id: "8",
        user_info: {
          name: "asd",
          email: "test@mail.com",
          phone_number: "123456",
        },
        store_info: {
          name: "asdhg",
        },
        order_counts_to_req_offer: 0,
        created_at: "Thu Aug 22 2024 22:09:04 GMT+0530 (India Standard Time)",
        __v: 0,
      },
    ],
    count: 1,
  },
};

const filteredData = data.filter((item) => item.status === "1");

const MyTable = () => {
  const newTimestamp = Math.floor(Date.now() / 1000);

  const calculateTimeDifference = (timestamp) => {
    const differenceInSeconds = newTimestamp - timestamp;
    return Math.floor(differenceInSeconds / 60);
  };

  // Get the user information from data1
  const userInfo = data1.data.list[0].user_info;

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

                  {/* Display the user info instead of orderType */}
                  <Box>
                    <Typography variant="body2">{userInfo.name}</Typography>
                    <Typography variant="body2">{userInfo.email}</Typography>
                    <Typography variant="body2">{userInfo.phone_number}</Typography>
                  </Box>
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

export default MyTable;

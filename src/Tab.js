import React, { useState } from "react";
import { Tabs as MuiTabs, Tab, Box, Typography } from "@mui/material";
import styled from "styled-components";
import MyTable from "./tab1";
import SecondTable from "./tab2";
import ThirdTable from "./tab3";

const TabPanel = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>
);

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

const Muitabs = styled(MuiTabs)`
  .MuiTabs-flexContainer {
    display: flex !important;
    justify-content: space-around !important;
  }
`;

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

const Tabs = () => {
  const [value, setValue] = useState(0);

  // Extract the count value from data1
  const count = data1.data.count;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Muitabs
        TabIndicatorProps={{
          sx: {
            backgroundColor: "green",
          },
        }}
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab
          label={`FOLLOWERS(${count})`}
          {...a11yProps(0)}
          sx={{
            mx: 1,
            "&.Mui-selected": {
              color: "black", 
            },
          }}
        />
        <Tab
          // Show the count next to OFFER REQUEST
          label={`OFFER REQUEST`}
          {...a11yProps(1)}
          sx={{
            mx: 1,
            "&.Mui-selected": {
              color: "black", 
            },
          }}
        />
        <Tab
          label="COMPLETED"
          {...a11yProps(2)}
          sx={{
            mx: 1,
            "&.Mui-selected": {
              color: "black",
            },
          }}
        />
      </Muitabs>
      <TabPanel value={value} index={0}>
        <MyTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SecondTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ThirdTable />
      </TabPanel>
    </Box>
  );
};

export default Tabs;

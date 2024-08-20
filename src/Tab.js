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

const Tabs = () => {
  const [value, setValue] = useState(0);

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
          label="CURRENT"
          {...a11yProps(0)}
          sx={{
            mx: 1,

            "&.Mui-selected": {
              color: "black", // Ensure text color stays black when selected
            },
          }}
        />
        <Tab
          label="ON THE WAY"
          {...a11yProps(1)}
          sx={{
            mx: 1,

            "&.Mui-selected": {
              color: "black", // Ensure text color stays black when selected
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
        <SecondTable/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ThirdTable/>
      </TabPanel>
    </Box>
  );
};

export default Tabs;

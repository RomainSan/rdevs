import { useState } from "react";
import { Tab, Box, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
const vitrineArray = [];
const ecommerceArray = [];
export default function Themes() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ typography: "body1" , background : "#fff"}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Site Vitrine" value="1" />
            <Tab label="eCommerce" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {vitrineArray.map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}
        </TabPanel>
        <TabPanel value="2">
          {ecommerceArray.map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}
        </TabPanel>
      </TabContext>
    </Box>
  );
}

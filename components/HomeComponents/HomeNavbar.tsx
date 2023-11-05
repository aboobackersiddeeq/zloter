"use client";
import { Add } from "@mui/icons-material";

import { Box, IconButton, Tab, Tabs } from "@mui/material";
import React from "react";

const HomeNavbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="text-sm p-2 md:mr-6 ">
      <div className="absolute mt-1">
        <IconButton>
          <Add />
        </IconButton>
      </div>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          sx={{
            "& .MuiTabs-scrollButtons.Mui-disabled": {
              backgroundColor: "white",
              opacity: 0,
            },
            "& .MuiTabs-scrollButtons": {
              backgroundColor: "white",
              opacity: 1,
            },
          }}
        >
          <Tab
            sx={{
              fontSize: 12,
              fontWeight: "bold",
            }}
            label="For you"
          />
          <Tab
            sx={{
              fontSize: 12,
              fontWeight: "bold",
            }}
            label="Following"
          />
          <Tab
            sx={{
              fontSize: 12,
              fontWeight: "bold",
            }}
            label="Coding"
          />
          <Tab
            sx={{
              fontSize: 12,
              fontWeight: "bold",
            }}
            label="Tehnology"
          />
          <Tab
            sx={{
              fontSize: 12,
              fontWeight: "bold",
            }}
            label="Data Scinece"
          />
          <Tab
            sx={{
              fontSize: 12,
              fontWeight: "bold",
            }}
            label="Programing"
          />
          <Tab
            sx={{
              fontSize: 12,
              fontWeight: "bold",
            }}
            label="Improvment"
          />
        </Tabs>
      </Box>
    </div>
  );
};

export default HomeNavbar;

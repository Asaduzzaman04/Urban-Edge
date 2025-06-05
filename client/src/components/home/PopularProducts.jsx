import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const PopularProducts = () => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <section className="py-5 ">
        {/* product tab */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-xl  md:text-3xl ">Popular Products</h2>
            <p>Do not miss the current offers until the end of March.</p>
          </div>
          {/* tab-list  */}
          <div className="  lg:w-2/5">
            <Box
              sx={{
                maxWidth: { xs: 320, sm: 480, md: 640 },
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
                <Tab label="Item Four" />
                <Tab label="Item Five" />
                <Tab label="Item Six" />
                <Tab label="Item Seven" />
              </Tabs>
            </Box>
          </div>
        </div>
        {/* product card  */}
        <div>



        </div>
      </section>
    </>
  );
};

export default PopularProducts;

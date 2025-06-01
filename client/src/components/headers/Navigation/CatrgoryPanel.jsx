import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { FiChevronDown, FiChevronUp, FiMenu, FiTag } from "react-icons/fi";
import { Typography } from "@mui/material";

const CategoryPanel = ({ isopenpanel, togglePanel, categories }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const handleCategoryClick = (name) => {
    setOpenCategory((prev) => (prev === name ? null : name));
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation">
      <h3 className="text-xl font-semibold px-4 pt-4 pb-2">
        Search by category
      </h3>
      <Divider />

      <List>
        {categories.map((item) => (
          <div key={item.name}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleCategoryClick(item.name)}>
                <span className="mr-2 text-black font-bold">{item.icon}</span>
                <ListItemText primary={item.name} />
                {openCategory === item.name ? (
                  <FiChevronUp />
                ) : (
                  <FiChevronDown />
                )}
              </ListItemButton>
            </ListItem>

            <Collapse
              in={openCategory === item.name}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {item.subcategories.map((sub) => (
                  <ListItemButton
                    onClick={togglePanel}
                    key={sub}
                    sx={{ pl: 6 }}
                  >
                    <FiTag className="mr-2 text-sm" />
                    <ListItemText primary={sub} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>

      <Divider />
      <div className="p-4">
        <Button
          variant="contained"
          color="primary"
          onClick={togglePanel}
          fullWidth
        >
          Close
        </Button>
      </div>
    </Box>
  );

  return (
    <>
      <Button
        startIcon={<FiMenu />}
        variant="outlined"
        onClick={togglePanel}
        className="!capitalize !border-gray-500 "
        color="text"
  
        
      >
        Shop by Category
      </Button>
      <Typography variant="h6">
        <Drawer open={isopenpanel} onClose={togglePanel}>
          {DrawerList}
        </Drawer>
      </Typography>
    </>
  );
};

export default CategoryPanel;

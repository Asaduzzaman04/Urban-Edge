import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import { FiMenu } from 'react-icons/fi'
import CategoryCollapseItem from './CategoryCollapseItem'

const CategoryPanel = ({ isopenpanel, togglePanel, categories }) => {
  const [openCategory, setOpenCategory] = useState(null)

  const handleCategoryClick = (name) => {
    setOpenCategory((prev) => (prev === name ? null : name))
  }

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation">
      <h3 className="text-sm md:text-xl font-semibold px-2 md:px-4 pt-4 pb-2 font-Montserrat">
        Search by category
      </h3>
      <Divider />

      <List>
        {categories.map((item) => (
          <CategoryCollapseItem
            key={item.name}
            item={item}
            openCategory={openCategory}
            handleCategoryClick={handleCategoryClick}
            togglePanel={togglePanel}
          />
        ))}
      </List>

      <Divider />
      <div className="p-4">
        <Button
          variant="contained"
          color="primary"
          onClick={togglePanel}
          fullWidth
          sx={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Close
        </Button>
      </div>
    </Box>
  )

  return (
    <>
      <Button
        startIcon={<FiMenu />}
        variant="outlined"
        onClick={togglePanel}
        className="!capitalize !border-gray-500"
        color="text"
        sx={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        Shop by Category
      </Button>

      <Drawer open={isopenpanel} onClose={togglePanel}>
        {DrawerList}
      </Drawer>
    </>
  )
}

export default CategoryPanel

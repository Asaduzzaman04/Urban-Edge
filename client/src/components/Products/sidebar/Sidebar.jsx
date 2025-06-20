import React, { useState } from 'react'
import { Box, List, Typography } from '@mui/material'
import CategoryCollapseItem from '../../headers/Navigation/CategoryCollapseItem'

const categories = [
  {
    name: 'Shop by Category',
    
    subcategories: ['Fashion', 'Electronics', 'Bags', 'Footwear'],
  },
  {
    name: 'Brands',
  
    subcategories: ['Nike', 'Adidas', 'Puma', 'Reebok'],
  },
]

const Sidebar = () => {
  const [openCategory, setOpenCategory] = useState(null)
  const [selectedSubcategories, setSelectedSubcategories] = useState([])

  const handleCategoryClick = (name) => {
    setOpenCategory((prev) => (prev === name ? null : name))
  }

  const handleSubCheckboxChange = (sub) => {
    setSelectedSubcategories((prev) =>
      prev.includes(sub)
        ? prev.filter((item) => item !== sub)
        : [...prev, sub]
    )
  }

  return (
    <Box sx={{ width: 300, p: 2, borderRight: '1px solid #ddd' }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        Category Filters
      </Typography>

      <List>
        {categories.map((item) => (
          <CategoryCollapseItem
            key={item.name}
            item={item}
            openCategory={openCategory}
            handleCategoryClick={handleCategoryClick}
            showCheckbox={true}
            selectedSubcategories={selectedSubcategories}
            handleCheckboxChange={handleSubCheckboxChange}
          />
        ))}
      </List>

      {/* Displaying Selected Subcategories */}
      {/* <Typography variant="h6" sx={{ mt: 3 }}>
        Selected Subcategories:
      </Typography>
      {selectedSubcategories.length > 0 ? (
        <List>
          {selectedSubcategories.map((sub) => (
            <Typography key={sub} variant="body2">
              {sub}
            </Typography>
          ))}
        </List>
      ) : (
        <Typography variant="body2">None selected</Typography>
      )} */}
    </Box>
  )
}

export default Sidebar

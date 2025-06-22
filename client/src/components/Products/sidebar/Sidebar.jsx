import React, { useState } from 'react'
import { Box, List, Typography, Slider } from '@mui/material'
import CategoryCollapseItem from '../../headers/Navigation/CategoryCollapseItem'
import RatingFilterItem from './StarRatingFilter'

const categories = [
  {
    name: 'Shop by Category',
    subcategories: [
      'Fashion',
      'Electronics',
      'Bags',
      'Footwear',
      'Groceries',
      'Beauty',
      'Wellness',
      'Jewellery'
    ]
  },
  {
    name: 'Brands',
    subcategories: [
      'Nike',
      'Adidas',
      'Puma',
      'Reebok',
      'Apple',
      'Samsung',
      'Sony',
      'LG'
    ]
  }
]

const Sidebar = () => {
  const [openCategory, setOpenCategory] = useState(null)
  const [selectedSubcategories, setSelectedSubcategories] = useState([])
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [selectedRatings, setSelectedRatings] = useState([])

  // Function to handle category click
  const handleCategoryClick = (name) => {
    setOpenCategory((prev) => (prev === name ? null : name))
  }

  // Function to handle subcategory checkbox changes
  const handleSubCheckboxChange = (sub) => {
    setSelectedSubcategories((prev) =>
      prev.includes(sub) ? prev.filter((item) => item !== sub) : [...prev, sub]
    )
  }
  // Function to handle price range changes
  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue)
  }
  // Function to handle rating checkbox changes
  const handleRatingCheck = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    )
  }

  return (
    <Box
      sx={{
        width: { xs: '100%', sm: 300 },
        p: 2,
        borderRight: { xs: 'none', sm: '1px solid #ddd' }
      }}
    >
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

      {/* Price Filter */}
      <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold' }}>
        Filter by Price
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Slider
          value={priceRange}
          min={0}
          max={10000}
          step={50}
          onChange={handlePriceRangeChange}
          valueLabelDisplay="auto"
          sx={{
            color: 'black',
            '& .MuiSlider-thumb': {
              borderRadius: '50%',
              width: 18,
              height: 18
            },
            '& .MuiSlider-track': {
              border: 'none'
            },
            '& .MuiSlider-rail': {
              opacity: 0.3,
              backgroundColor: '#bfbfbf'
            }
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 1
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            From: Tk{priceRange[0]}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            To: Tk{priceRange[1]}
          </Typography>
        </Box>
      </Box>

      {/* Rating Filter */}
      <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold', mb: 1 }}>
        Filter by Rating
      </Typography>
      {[5, 4, 3, 2, 1].map((rating) => (
        <RatingFilterItem
          key={rating}
          rating={rating}
          checked={selectedRatings.includes(rating)}
          onChange={handleRatingCheck}
        />
      ))}
    </Box>
  )
}

export default Sidebar

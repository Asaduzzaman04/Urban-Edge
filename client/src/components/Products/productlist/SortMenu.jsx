import React, { useState } from 'react'
import { Typography, Button, Menu, MenuItem } from '@mui/material'
import { FiChevronDown } from 'react-icons/fi'

const sortOptions = [
  { value: 'az', label: 'A-Z' },
  { value: 'za', label: 'Z-A' },
  { value: 'lowToHigh', label: 'Price: Low to High' },
  { value: 'highToLow', label: 'Price: High to Low' }
]

const SortMenu = ({ handleSortSelect }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedLabel, setSelectedLabel] = useState('Options')
  const open = Boolean(anchorEl)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleItemSelect = (value, label) => {
    handleSortSelect(value)
    setSelectedLabel(label)
    handleMenuClose()
  }

  return (
    <div className="flex items-center gap-3 ">
      <Typography variant="body2" className="!font-Montserrat">
        Sort by:
      </Typography>

      <Button
        id="filter-button"
        aria-controls={open ? 'filter-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleMenuOpen}
        variant="outlined"
        size="small"
        endIcon={<FiChevronDown />}
      >
        {selectedLabel}
      </Button>

      <Menu
        id="filter-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        slotProps={{
          list: { 'aria-labelledby': 'filter-button' }
        }}
      >
        {sortOptions.map(({ value, label }) => (
          <MenuItem key={value} onClick={() => handleItemSelect(value, label)}>
            <Typography variant="body2" className="!font-Montserrat">
              {label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default SortMenu

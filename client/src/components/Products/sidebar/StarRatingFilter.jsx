import React from 'react'
import { Box, Checkbox } from '@mui/material'
import { FaStar } from 'react-icons/fa'

const RatingFilterItem = ({ rating, checked, onChange }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <Checkbox
        checked={checked}
        onChange={() => onChange(rating)}
        sx={{ p: 0, mr: 1 }}
      />
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={18}
          color={star <= rating ? '#FFA500' : '#ccc'}
          style={{ marginRight: 2 }}
        />
      ))}
    </Box>
  )
}

export default RatingFilterItem

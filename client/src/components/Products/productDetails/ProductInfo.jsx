import React from 'react'
import { Typography, Button, Box, Stack } from '@mui/material'
import { FiHeart } from 'react-icons/fi'
import { motion } from 'framer-motion'

// Function to calculate delivery date
const getEstimatedDeliveryDate = (daysToAdd = 3) => {
  const today = new Date()
  today.setDate(today.getDate() + daysToAdd)
  return today.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

const ProductInfo = ({ product }) => {
  return (
    <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      {/* Product Name */}
      <Typography variant="h4" fontWeight={600} gutterBottom>
        {product.name}
      </Typography>

      {/* Brand */}
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Brand: <strong>{product.brand}</strong>
      </Typography>

      {/* Price */}
      <Stack direction="row" spacing={2} alignItems="center" mb={1}>
        <Typography variant="h5" fontWeight={600} color="error">
          ৳{product.price}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <del>tk {product.oldPrice}</del>
        </Typography>
      </Stack>

      {/* Stock */}
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        Available In Stock:{' '}
        <span className="text-green-700  text-xl">
          {product.stock}
          items
        </span>
      </Typography>

      {/* Estimated Delivery */}
      <Typography
        variant="body2"
        color="green"
        gutterBottom
        className="!font-Montserrat"
      >
        🚚 Estimated Delivery: {getEstimatedDeliveryDate()} (2-3 Days)
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        color="text.secondary"
        className="!font-Montserrat"
      >
        {product.description}
      </Typography>

      {/* Reviews */}
      <Typography
        variant="body2"
        color="text.secondary"
        gutterBottom
        className="!font-Montserrat"
      >
        {product.reviews.length} Reviews
      </Typography>

      {/* Buttons */}
      <Box mt={2}>
        <Button
          variant="contained"
          color="error"
          sx={{ mr: 2, borderRadius: '8px', px: 3 }}
        >
          Add to Cart
        </Button>
        <Button
          variant="outlined"
          startIcon={<FiHeart />}
          sx={{ borderRadius: '8px', px: 3 }}
        >
          Wishlist
        </Button>
      </Box>
    </motion.div>
  )
}

export default ProductInfo

import React from 'react'
import { Typography, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { FiHeart } from 'react-icons/fi'

const ProductInfo = ({ product }) => {
  return (
    <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <Typography variant="h5">{product.name}</Typography>
      <Typography variant="body1" color="textSecondary">
        Tk{product.price}{' '}
        <del style={{ marginLeft: 8 }}>₹{product.oldPrice}</del>
      </Typography>
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        In stock: {product.stock}
      </Typography>
      <Button variant="contained" color="error" sx={{ mr: 2 }}>
        Add to Cart
      </Button>
      <Button startIcon={<FiHeart />} variant="outlined">
        Wishlist
      </Button>
    </motion.div>
  )
}

export default ProductInfo

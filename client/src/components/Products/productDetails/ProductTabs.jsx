import React, { useState } from 'react'
import { Tabs, Tab, Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const ProductTabs = ({ description, reviews }) => {
  const [value, setValue] = useState(0)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="my-8"
    >
      <Tabs
        value={value}
        onChange={(e, v) => setValue(v)}
        textColor="error"
        indicatorColor="error"
      >
        <Tab label="Description" />
        <Tab label={`Reviews (${reviews.length})`} />
      </Tabs>
      <Box sx={{ p: 2 }}>
        {value === 0 && <Typography>{description}</Typography>}
        {value === 1 &&
          reviews.map((review, idx) => (
            <Typography key={idx} sx={{ mb: 1 }}>
              ⭐ {review}
            </Typography>
          ))}
      </Box>
    </motion.div>
  )
}

export default ProductTabs

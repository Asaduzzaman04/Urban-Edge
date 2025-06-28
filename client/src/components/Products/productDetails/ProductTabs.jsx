import React, { useState } from 'react'
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  Rating,
  Stack
} from '@mui/material'
import { motion } from 'framer-motion'

// Sample avatar colors to cycle through (optional)
const avatarColors = ['#f44336', '#2196f3', '#4caf50', '#ff9800']

const ProductTabs = ({ description, reviews }) => {
  const [value, setValue] = useState(0)

  // Controlled inputs for new review
  const [newReviewText, setNewReviewText] = useState('')
  const [newReviewRating, setNewReviewRating] = useState(0)
  const [newReviewUser, setNewReviewUser] = useState('')

  // Example handle submit (replace with your real logic)
  const handleAddReview = () => {
    if (!newReviewUser || !newReviewText || newReviewRating === 0) {
      alert('Please fill all review fields and give a star rating')
      return
    }
    alert(
      `User: ${newReviewUser}, Rating: ${newReviewRating}, Review: ${newReviewText}`
    )
    setNewReviewText('')
    setNewReviewRating(0)
    setNewReviewUser('')
  }

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
        aria-label="product tabs"
      >
        <Tab label="Description" />
        <Tab label={`Reviews (${reviews.length})`} />
      </Tabs>

      <Box sx={{ p: 2 }}>
        {value === 0 && (
          <Typography className="!font-Montserrat">{description}</Typography>
        )}

        {value === 1 && (
          <>
            {/* Scrollable reviews container */}
            <Box
              sx={{
                maxHeight: 300,
                overflowY: 'auto',
                mb: 3,
                pr: 1,
                border: '1px solid #ddd',
                borderRadius: 1
              }}
            >
              {reviews.length === 0 && (
                <Typography className="!font-Montserrat" color="text.secondary">
                  No reviews yet.
                </Typography>
              )}
              {reviews.map(({ username, text, rating, date }, idx) => {
                const bgColor = avatarColors[idx % avatarColors.length]

                const formattedDate = new Date(date).toLocaleDateString(
                  undefined,
                  {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  }
                )

                return (
                  <Box
                    key={idx}
                    sx={{
                      display: 'flex',
                      gap: 2,
                      mb: 2,
                      alignItems: 'flex-start'
                    }}
                  >
                    <Avatar sx={{ bgcolor: bgColor, width: 40, height: 40 }}>
                      {username[0].toUpperCase()}
                    </Avatar>

                    <Box sx={{ flex: 1 }}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        justifyContent="space-between"
                      >
                        <Typography
                          variant="subtitle2"
                          fontWeight={600}
                          className="!font-Montserrat"
                        >
                          {username}
                        </Typography>

                        <Typography variant="caption" color="text.secondary">
                          {formattedDate}
                        </Typography>

                        <Rating
                          name={`read-only-rating-${idx}`}
                          value={rating}
                          readOnly
                          size="small"
                          sx={{ ml: 'auto' }}
                        />
                      </Stack>
                      <Typography className="!font-Montserrat" sx={{ mt: 0.5 }}>
                        {text}
                      </Typography>
                    </Box>
                  </Box>
                )
              })}
            </Box>

            {/* New review input section */}
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                maxWidth: 500
              }}
              onSubmit={(e) => {
                e.preventDefault()
                handleAddReview()
              }}
            >
              <TextField
                label="Your Name"
                value={newReviewUser}
                onChange={(e) => setNewReviewUser(e.target.value)}
                fullWidth
                size="small"
                required
                className="!font-Montserrat"
              />

              <TextField
                label="Write your review"
                value={newReviewText}
                onChange={(e) => setNewReviewText(e.target.value)}
                fullWidth
                multiline
                rows={3}
                size="small"
                required
                className="!font-Montserrat"
              />

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography className="!font-Montserrat">Rate:</Typography>
                <Rating
                  name="new-review-rating"
                  value={newReviewRating}
                  onChange={(_, newValue) => setNewReviewRating(newValue)}
                  size="medium"
                />
              </Box>

              <Button
                variant="contained"
                className="!bg-background-dark !w-fit"
                type="submit"
              >
                Submit Review
              </Button>
            </Box>
          </>
        )}
      </Box>
    </motion.div>
  )
}

export default ProductTabs

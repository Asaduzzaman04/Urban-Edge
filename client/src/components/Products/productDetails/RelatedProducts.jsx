import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { productData } from '../../home/PopularProducts'
import ProductCard from '../ProductCard'

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="my-8"
    >
      <Typography variant="h6">Related Products</Typography>
      <Swiper slidesPerView={3} spaceBetween={20}>
        {productData.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard
              discount={item.discount}
              image={item.image}
              brand={item.brand}
              title={item.title}
              rating={item.rating}
              originalPrice={item.originalPrice}
              offerPrice={item.offerPrice}
              onAddToCart={() => {}}
            />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {item.name}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  )
}

export default RelatedProducts

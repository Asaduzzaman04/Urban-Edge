import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { motion } from 'framer-motion'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
import { IconButton } from '@mui/material'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/styles.min.css'

const ProductGallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0])
  const [activeButton, setActiveButton] = useState(null)

  const handleArrowClick = (direction) => {
    const swiper = document.querySelector('.thumb-swiper')?.swiper
    if (swiper) {
      if (direction === 'up') swiper.slidePrev()
      else swiper.slideNext()
      // Set active button
      setActiveButton(direction)
      // Remove active state after 300ms
      setTimeout(() => setActiveButton(null), 300)
    }
  }

  return (
    <motion.div
      className="flex flex-col md:flex-row gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Thumbnails + Arrows */}
      <div className="flex flex-col items-center w-[80px] md:w-[100px]">
        {/* Top Arrow */}
        <IconButton
          size="small"
          onClick={() => handleArrowClick('up')}
          className={`!transition-all !duration-300 ${
            activeButton === 'up'
              ? '!bg-background-dark !text-white'
              : '!bg-gray-100'
          }`}
        >
          <FiChevronUp />
        </IconButton>

        <Swiper
          direction="vertical"
          modules={[Navigation]}
          className="thumb-swiper h-[300px] md:h-[360px]"
          spaceBetween={1}
          slidesPerView={3.5}
        >
          {images?.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`thumb-${index}`}
                onClick={() => setActiveImage(img)}
                className={`cursor-pointer rounded-md w-full h-[100px] object-cover border transition-all duration-300 ${
                  activeImage === img ? 'border-warning' : 'border-transparent'
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Arrow */}
        <IconButton
          size="small"
          onClick={() => handleArrowClick('down')}
          className={`!transition-all !duration-300 ${
            activeButton === 'down'
              ? '!bg-background-dark !text-white'
              : '!bg-gray-100'
          }`}
        >
          <FiChevronDown />
        </IconButton>
      </div>

      {/* Main Image with Zoom */}
      <div className="flex-1 overflow-hidden rounded-xl border">
        <InnerImageZoom
          src={activeImage}
          zoomSrc={activeImage}
          alt="Selected Product"
          zoomType="hover"
          moveType="pan"
          zoomScale={1.5}
          className="w-full h-[400px] md:h-[500px] object-cover"
        />
      </div>
    </motion.div>
  )
}

export default ProductGallery

import React from 'react'
import { motion } from 'framer-motion'
import { CgMaximizeAlt } from 'react-icons/cg'
import { FaCodeCompare } from 'react-icons/fa6'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { Button } from '@mui/material'

const ProductCard = ({
  discount,
  image,
  hoverImage,
  brand,
  title,
  rating,
  originalPrice,
  offerPrice,
  onAddToCart,
  columns
}) => {
  const iconVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    })
  }

  return (
    <article
      className={`rounded-xl overflow-hidden shadow-sm bg-white p-4 w-full ${
        columns === 1 ? 'flex gap-4 items-center ' : 'flex flex-col'
      }`}
    >
      {/* Image Container */}
      <motion.div
        className={`relative overflow-hidden group rounded-lg ${
          columns === 1
            ? 'w-32 h-32 flex-shrink-0'
            : 'aspect-[4/5] bg-cover bg-center'
        } transition-all duration-500`}
        style={{ backgroundImage: `url(${image})` }}
        whileHover={{
          backgroundImage: `url(${
            hoverImage ||
            'https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          })`,
          transition: { duration: 0.6, ease: 'easeInOut', delay: 0.2 },
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
        }}
      >
        {discount && (
          <span className="absolute top-2 left-2 bg-background-dark text-accent-hover text-xs font-semibold px-3 py-1 rounded z-10">
            {discount}
          </span>
        )}

        {columns !== 1 && (
          <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition duration-500">
            {[
              { icon: <CgMaximizeAlt />, key: 'maximize' },
              { icon: <FaCodeCompare />, key: 'compare' },
              { icon: <AiOutlineHeart />, key: 'heart' }
            ].map(({ icon, key }, i) => (
              <motion.button
                key={key}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={iconVariants}
                whileHover={{ scale: 1.2 }}
                aria-label="Action icon"
                className="text-gray-800 text-xl hover:text-red-600 transition rounded-full p-2 bg-white shadow-sm"
              >
                {icon}
              </motion.button>
            ))}
          </div>
        )}
      </motion.div>

      {/* Card Content */}
      <div
        className={`mt-4 flex flex-col flex-1 select-text ${
          columns === 1 ? '' : 'text-center'
        }`}
      >
        <h2 className="text-sm font-medium text-gray-600">{brand}</h2>
        <h3 className="text-base font-bold text-gray-900 leading-tight mb-1">
          {title}
        </h3>
        <div className="flex items-center mb-2 justify-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={i < rating ? 'text-yellow-500' : 'text-gray-300'}
            >
              ★
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 mb-4 justify-center">
          <del className="text-gray-400 text-sm">₹{originalPrice}</del>
          <span className="text-red-600 font-bold text-lg">₹{offerPrice}</span>
        </div>
        <Button
          variant="contained"
          onClick={onAddToCart}
          sx={{
            backgroundColor: '#111827',
            '&:hover': { backgroundColor: '#1f2937' },
            textTransform: 'none',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            paddingY: '8px'
          }}
        >
          <AiOutlineShoppingCart className="text-2xl text-shadow-accent-hover" />
          Add to Cart
        </Button>
      </div>
    </article>
  )
}

export default ProductCard

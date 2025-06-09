import React from "react";
import { motion } from "framer-motion";
import { AiOutlineZoomIn, AiOutlineHeart } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";

const ProductCard = ({
  discount,
  image,
  brand,
  title,
  rating,
  originalPrice,
  offerPrice,
  onAddToCart,
}) => {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl overflow-hidden shadow-sm p-3 bg-white w-full h-96 flex flex-col"
    >
      <div className="relative group overflow-hidden rounded aspect-[4/5]">
        {/* Discount Badge */}
        <span className="absolute top-2 left-2 bg-background-dark text-white text-xs font-semibold px-2 py-1 rounded z-10">
          {discount}
        </span>

        {/* Image */}
        <motion.img
          src={image}
          alt={`${brand} ${title}`}
          className="w-full h-full object-cover transition duration-300"
          whileHover={{ scale: 1.05 }}
        />

        {/* Action Icons */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition duration-300">
          <motion.button
            whileHover={{ scale: 1.2 }}
            aria-label="Zoom image"
            className="text-gray-700 text-xl hover:text-red-600 transition rounded-2xl p-2  bg-white"
          >
            <AiOutlineZoomIn />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            aria-label="Compare product"
            className="text-gray-700 text-xl hover:text-red-600 transition rounded-2xl p-2 bg-white"
          >
            <BsLink45Deg />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            aria-label="Add to wishlist"
            className="text-gray-700 text-xl hover:text-red-600 transition rounded-2xl p-2 bg-white"
          >
            <AiOutlineHeart />
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-col flex-1 select-text">
        <h2 className="text-sm font-semibold text-gray-700">{brand}</h2>
        <h3 className="text-base font-bold text-gray-900 mb-1">{title}</h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={i < rating ? "text-yellow-500" : "text-gray-300"}
            >
              ★
            </span>
          ))}
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-2 mb-4">
          <del className="text-gray-400 text-sm">₹{originalPrice}</del>
          <span className="text-red-600 font-bold text-lg">₹{offerPrice}</span>
        </div>

        <button
          onClick={onAddToCart}
          className="mt-auto w-full bg-white border border-red-600 text-red-600 font-semibold py-2 rounded hover:bg-red-600 hover:text-white transition"
        >
          🛒 ADD TO CART
        </button>
      </div>
    </motion.article>
  );
};

export default ProductCard;

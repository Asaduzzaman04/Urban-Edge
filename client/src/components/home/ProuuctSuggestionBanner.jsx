import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Button } from "@mui/material";

const productBannerData = [
  {
    id: 1,
    title: "Elegant Wooden Desk for Modern Office",
    image:
      "https://serviceapi.spicezgold.com/download/1741663408792_1737020756772_New_Project_1.png",
    price: 249.99,
    link: "/product/wooden-desk",
  },
  {
    id: 2,
    title: "Minimalist Wall Clock for Home Decor",
    image:
      "https://serviceapi.spicezgold.com/download/1749459079964_1737020916820_New_Project_52.jpg",
    price: 39.99,
    link: "/product/wall-clock",
  },
  {
    id: 3,
    title: "Stylish Leather Backpack for Travel",
    image:
      "https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg",
    price: 129.99,
    link: "/product/leather-backpack",
  },
  {
    id: 4,
    title: "Modern Pendant Light for Dining Room",
    image:
      "https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg",
    price: 89.99,
    link: "/product/pendant-light",
  },
  {
    id: 5,
    title: "Comfortable Ergonomic Office Chair",
    image:
      "https://serviceapi.spicezgold.com/download/1749459079964_1737020916820_New_Project_52.jpg",
    price: 179.99,
    link: "/product/office-chair",
  },
];

const ProductSuggestionBanner = () => {
  return (
    <section className=" mx-auto py-8 px-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {productBannerData.map((product) => (
          <SwiperSlide key={product.id}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * product.id, type: "tween" }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden h-[220px] md:h-[250px] w-full"
            >
              {/* Background image with zoom on hover */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="h-full w-full bg-center bg-cover"
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
              />

              {/* Overlay content — always visible */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <h3 className="text-white text-lg font-semibold mb-1 leading-snug">
                  {product.title}
                </h3>
                <p className="text-red-400 font-bold text-lg mb-3">
                  ₹{product.price}
                </p>
                <Button variant="contained" color="inherit" className="!w-fit">
                  <Link
                    to={product.link}
                    className=" text-black text-sm font-medium px-4 py-2 rounded  transition w-fit"
                  >
                    Shop Now
                  </Link>
                </Button>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductSuggestionBanner;

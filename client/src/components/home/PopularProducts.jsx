import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import ProductCard from "../Products/ProductCard";
const productData = [
  {
    id: 1,
    discount: "10%",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fHww",
    brand: "Allen Solly",
    title: "Men Pure Cotton Striped Casual Shirt",
    rating: 4,
    originalPrice: "2250.00",
    offerPrice: "1999.00",
  },
  {
    id: 2,
    discount: "15%",
    image:
      "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww",
    brand: "Levi's",
    title: "Men Slim Fit Solid Shirt",
    rating: 5,
    originalPrice: "2499.00",
    offerPrice: "2120.00",
  },
  {
    id: 3,
    discount: "20%",
    image:
      "https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHww",
    brand: "Peter England",
    title: "Checked Cotton Casual Shirt",
    rating: 3,
    originalPrice: "1999.00",
    offerPrice: "1599.00",
  },
  {
    id: 4,
    discount: "5%",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsfGVufDB8fDB8fHww",
    brand: "Zara",
    title: "Men's Casual Linen Shirt",
    rating: 4,
    originalPrice: "3000.00",
    offerPrice: "2850.00",
  },
  {
    id: 5,
    discount: "5%",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsfGVufDB8fDB8fHww",
    brand: "Zara",
    title: "Men's Casual Linen Shirt",
    rating: 4,
    originalPrice: "3000.00",
    offerPrice: "2850.00",
  },
  {
    id: 6,
    discount: "5%",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsfGVufDB8fDB8fHww",
    brand: "Zara",
    title: "Men's Casual Linen Shirt",
    rating: 4,
    originalPrice: "3000.00",
    offerPrice: "2850.00",
  },
  {
    id: 7,
    discount: "5%",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsfGVufDB8fDB8fHww",
    brand: "Zara",
    title: "Men's Casual Linen Shirt",
    rating: 4,
    originalPrice: "3000.00",
    offerPrice: "2850.00",
  },
  {
    id: 8,
    discount: "5%",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsfGVufDB8fDB8fHww",
    brand: "Zara",
    title: "Men's Casual Linen Shirt",
    rating: 4,
    originalPrice: "3000.00",
    offerPrice: "2850.00",
  },
];

const PopularProducts = () => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <section className="py-5 ">
        {/* product tab */}
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div>
            <h2 className="text-xl  md:text-3xl ">Popular Products</h2>
            <p>Do not miss the current offers until the end of March.</p>
          </div>
          {/* tab-list  */}
          <div className="">
            <Box
              sx={{
                maxWidth: { xs: 320, sm: 480, md: 640 },
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
                <Tab label="Item Four" />
                <Tab label="Item Five" />
                <Tab label="Item Six" />
                <Tab label="Item Seven" />
              </Tabs>
            </Box>
          </div>
        </div>
        {/* product card  */}
        <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode]}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 6 },
            }}
            className="mySwiper"
              noSwiping={true}
          >
            {productData.length > 0 &&
              productData?.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductCard
                    discount={item.discount}
                    image={item.image}
                    brand={item.brand}
                    title={item.title}
                    rating={item.rating}
                    originalPrice={item.originalPrice}
                    offerPrice={item.offerPrice}
                    onAddToCart={() => alert(`${item.title} added to cart!`)}
                  />{" "}
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default PopularProducts;

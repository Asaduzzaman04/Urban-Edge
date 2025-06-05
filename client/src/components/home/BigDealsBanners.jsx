import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  EffectFade,
  Navigation,
  Pagination,
  Mousewheel,
  Autoplay,
} from "swiper/modules";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const bigDeals = [
  {
    title: "Special Offer",
    subTitle: "Big Saving Days Sale",
    product: "Smartphone XYZ Pro",
    price: "$499",
    image:
      "https://serviceapi.spicezgold.com/download/1742439896581_1737036773579_sample-1.jpg",
    buttonText: "Shop Now",
  },
  {
    title: "Limited Time Deal",
    subTitle: "Mega Electronics Fest",
    product: "4K UHD Smart TV",
    price: "$799",
    image:
      "https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg",
    buttonText: "Grab Deal",
  },
  {
    title: "Hot Offer",
    subTitle: "Fashion Carnival",
    product: "Designer Jacket",
    price: "$129",
    image:
      "https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg",
    buttonText: "Explore",
  },
];

const sideDeals = [
  {
    title: "Men's Footwear",
    price: "₹1500",
    image:
      "https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg",
  },
  {
    title: "Apple iPhone",
    price: "₹45000",
    image:
      "https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg",
  },
];

const BigDealsBanners = () => {
  return (
    <section className="mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main banner */}
        <div className="md:col-span-2 aspect-[21/9] relative">
          <Swiper
            spaceBetween={30}
            direction={"vertical"}
            effect={"fade"}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            chuk
            dia
            ki
            korbi
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            mousewheel={true}
            pagination={{ clickable: true }}
            modules={[EffectFade, Navigation, Pagination, Mousewheel, Autoplay]}
            className="rounded-xl overflow-hidden w-full h-full "
          >
            {bigDeals.map((deal, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${deal.image})` }}
                >
                  <div className="absolute top-10 right-10 text-background-dark space-y-3 max-w-md">
                    <motion.h2
                      initial={{ x: 100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-4xl font-bold"
                    >
                      {deal.title}
                    </motion.h2>
                    <motion.h4
                      initial={{ x: 100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-2xl font-semibold"
                    >
                      {deal.subTitle}
                    </motion.h4>
                    <motion.p
                      initial={{ x: 100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-lg"
                    >
                      {deal.product} -{" "}
                      <span className="text-yellow-400 font-bold">
                        {deal.price}
                      </span>
                    </motion.p>
                    <motion.div
                      initial={{ x: 100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <Button
                        variant="contained"
                        endIcon={<AiOutlineRight />}
                        sx={{
                          backgroundColor: "#facc15",
                          color: "#000",
                          fontWeight: "600",
                          "&:hover": { backgroundColor: "#eab308" },
                        }}
                      >
                        {deal.buttonText}
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom navigation */}

          {/* <div className="custom-prev absolute top-1/2 -left-5 z-10">
            <Button
              sx={{
                minWidth: 0,
                padding: 1,
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "#DFDFDF",
                  color: "black",
                },
                borderRadius: "50%",
                boxShadow: 3,
              }}
            >
              <AiOutlineLeft size={18} />
            </Button>
          </div>
          <div className="custom-next absolute top-1/2 -right-5 z-10">
            <Button
              sx={{
                minWidth: 0,
                padding: 1,
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "#facc15",
                  color: "black",
                },
                borderRadius: "50%",
                boxShadow: 3,
              }}
            >
              <AiOutlineRight size={18} />
            </Button>
          </div> */}
        </div>

        {/* Side banners */}
        <div className="flex flex-col gap-4 h-fit">
          {sideDeals.map((deal, index) => (
            <div
              key={index}
              className="aspect-[21/9] rounded-xl relative overflow-hidden bg-cover bg-center flex items-end p-4 text-white"
              style={{ backgroundImage: `url(${deal.image})` }}
            >
              <div className="bg-black bg-opacity-50 p-3 rounded w-full">
                <h3 className="text-lg font-semibold">{deal.title}</h3>
                <p className="text-yellow-400 font-bold">{deal.price}</p>
                <a
                  href="#"
                  className="text-sm underline text-yellow-300 mt-1 inline-block"
                >
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BigDealsBanners;

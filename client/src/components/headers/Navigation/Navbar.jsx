import React from "react";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@mui/material";
import { motion, AnimatePresence } from "motion/react";
import { FiChevronDown, FiTruck } from "react-icons/fi";
import { GiLargeDress, GiSonicShoes, GiLipstick } from "react-icons/gi";
import { MdSportsSoccer, MdOutlinePhoneIphone } from "react-icons/md";
import { FiTag, FiBox, FiWatch, FiGift, FiHeart } from "react-icons/fi";
import { CiShoppingTag } from "react-icons/ci";
import CategoryPanel from "./CatrgoryPanel";

const categories = [
  {
    name: "Men",
    subcategories: ["T-Shirts", "Jeans", "Shoes", "Jackets", "Accessories"],
    icon: <FiTag className="text-lg" />,
  },
  {
    name: "Women",
    subcategories: ["Dresses", "Handbags", "Heels", "Jewelry", "Tops", "Jeans"],
    icon: <GiLargeDress className="text-lg" />,
  },
  {
    name: "Footwear",
    subcategories: ["Sneakers", "Sports Shoes", "Boots", "Sandals"],
    icon: <GiSonicShoes className="text-lg" />,
  },
  {
    name: "Accessories",
    subcategories: ["Watches", "Sunglasses", "Wallets", "Belts"],
    icon: <FiBox className="text-lg" />,
  },
  {
    name: "Beauty",
    subcategories: ["Lipstick", "Perfume", "Skincare"],
    icon: <GiLipstick className="text-lg" />,
  },
  {
    name: "Electronics",
    subcategories: ["Smartphones", "Laptops", "Headphones", "Cameras"],
    icon: <MdOutlinePhoneIphone className="text-lg" />,
  },
  {
    name: "Sports",
    subcategories: ["Football", "Cricket", "Fitness Equipment"],
    icon: <MdSportsSoccer className="text-lg" />,
  },
  {
    name: "Watches",
    subcategories: ["Men's Watches", "Women's Watches", "Smartwatches"],
    icon: <FiWatch className="text-lg" />,
  },
  {
    name: "Gift Items",
    subcategories: ["Birthday Gifts", "Anniversary Gifts"],
    icon: <FiGift className="text-lg" />,
  },
  {
    name: "Special Picks",
    subcategories: ["Trending Now", "New Arrivals", "Best Sellers"],
    icon: <FiHeart className="text-lg" />,
  },
];

const Navbar = () => {
  const [isopenpanel, setOpenpanel] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const togglePanel = () => setOpenpanel((prev) => !prev);
  const handleNavigatio = (value) => {
    setActiveCategory((prev) => (value === prev ? null : value));
  };
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <nav className="flex items-center justify-between px-6 py-3 shadow-sm relative ">
      {/* Left: Category Panel */}
      <CategoryPanel
        isopenpanel={isopenpanel}
        togglePanel={togglePanel}
        categories={categories}
      />

      {/* Middle: Categories */}
      <div className="hidden lg:flex items-center gap-4 ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative "
            onClick={() => handleNavigatio(category.name)}
          >
            <Button
              endIcon={
                <FiChevronDown
                  size={16}
                  className={`  ${
                    activeCategory === category.name
                      ? "!rotate-180"
                      : "!rotate-0"
                  }`}
                />
              }
              variant="text"
              sx={{
                color: "#374151",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": { backgroundColor: "#000000", color: "#FFFFFF" },
              }}
            >
              {category.name}
            </Button>

            {/* Submenu */}
            <AnimatePresence>
              {activeCategory === category.name && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0, 1, 0.8, 1.01] }}
                  className="absolute  top-10 left-0 w-sm flex flex-col lg:gap-2  bg-white shadow-lg   rounded-lg overflow-hidden z-50"
                >
                  {category?.subcategories?.map((sub, idx) => (
                    <Link
                      key={idx}
                      to={`/shop/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-2  text-black transition-all duration-200 ease-linear hover:font-bold font-medium"
                    >
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="flex justify-start items-center gap-2 text-center"
                      >
                        <CiShoppingTag className="text-xl font-bold text-" />{" "}
                        {sub}
                      </motion.span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Right: Delivery Info */}
      <div className="text-sm flex items-center gap-2 text-success font-medium">
        <FiTruck className="text-lg" />
        Whole Bangladesh Delivery
      </div>
    </nav>
  );
};

export default Navbar;

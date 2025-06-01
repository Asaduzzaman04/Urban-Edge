import { useState } from "react";
import { Link } from "react-router";
import { GiLargeDress, GiSonicShoes, GiLipstick } from "react-icons/gi";
import { MdSportsSoccer, MdOutlinePhoneIphone } from "react-icons/md";
import { Menu, MenuItem } from "@mui/material";
import {
  FiTag,
  FiBox,
  FiWatch,
  FiGift,
  FiHeart,
  FiTruck,
  FiChevronDown,
} from "react-icons/fi";
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const togglePanel = () => setOpenpanel((prev) => !prev);

  const handleMenuOpen = (event, category) => {
    setAnchorEl(event.currentTarget);
    setActiveCategory(category);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveCategory(null);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-sm">
      {/* Left: Category Panel */}
      <CategoryPanel
        isopenpanel={isopenpanel}
        togglePanel={togglePanel}
        categories={categories}
      />

      {/* Middle: Categories */}
      <div
        className="hidden md:flex items-center gap-6"
        onMouseLeave={handleMenuClose}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative flex items-center gap-1 cursor-pointer group font-medium text-gray-700"
            onMouseEnter={(e) => handleMenuOpen(e, category)}
          >
            <span>{category.name}</span>
            <FiChevronDown className="text-xs mt-[1px]" />

            {/* SubMenu */}
            <Menu
              anchorEl={anchorEl}
              open={activeCategory?.name === category.name}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {category.subcategories.map((sub, idx) => (
                <MenuItem
                  key={idx}
                  
                  onMouseEnter={ ()=> setActiveCategory(sub)}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#f3f4f6",
                      color: "#2563eb",
                    },
                    fontWeight: 500,
                    fontSize: "20px",
                  }}
                >
                  <Link
                    to={`/shop/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-800 w-full block"
                    style={{ textDecoration: "none" }}
                  >
                    {sub}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </div>
        ))}
      </div>

      {/* Right: Delivery Info */}
      <div className="flex items-center gap-2 text-success font-medium">
        <FiTruck className="text-lg" />
        Whole Bangladesh Delivery
      </div>
    </nav>
  );
};

export default Navbar;

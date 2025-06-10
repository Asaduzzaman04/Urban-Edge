import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import Search from "./Search";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const Headers = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <header className=" w-full  text-sm  top-0 left-0 z-50">
      {/* Top Discount Bar */}
      <div className="px-4 md:px-[5%] lg:px-[8%] xl:px-[9%] py-2 flex flex-col md:flex-row justify-between items-center bg-background-dark text-text-inverted">
        <div className="text-center md:text-start mb-2 md:mb-0">
          Get up to 50% off new season styles, limited time only
        </div>
        <div className="flex gap-4">
          <Link
            to="/help-center"
            className="text-white no-underline hover:underline"
          >
            Help Center
          </Link>
          <Link
            to="/order-tracking"
            className="text-white no-underline hover:underline"
          >
            Order Tracking
          </Link>
        </div>
      </div>

      {/* Logo, Search, Wishlist, Cartm, login */}
      <div className="py-2 px-4 md:px-[5%] lg:px-[8%] xl:px-[9%] border border-accent flex flex-wrap justify-between items-center gap-4 text-text-primary">
        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-semibold no-underline hover:underline"
        >
          <span>Urban Edge </span>
        </Link>

        {/* Search */}
        <Search />
        {/* Wishlist | Cart  |login | register */}
        <motion.div
          className="flex gap-4 justify-center items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/login" className="no-underline hover:underline">
                Login
              </Link>
            </motion.div>

            <span className="text-gray-500">|</span>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/register" className="no-underline hover:underline">
                Register
              </Link>
            </motion.div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Link to="/wishlist">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                <Tooltip title="wishlist" placement="bottom">
                  <Button
                    variant="text"
                    color="warning"
                    aria-label="Wishlist"
                    className="!rounded-full"
                  >
                    <FavoriteBorderIcon className="" />
                  </Button>{" "}
                </Tooltip>
              </motion.div>
            </Link>

            <Link to="/cart">
              <Tooltip title="cart" placement="bottom">
                <IconButton color="text" aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <AiOutlineShoppingCart className="text-2xl text-black" />
                  </StyledBadge>
                </IconButton>{" "}
              </Tooltip>
            </Link>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Headers;

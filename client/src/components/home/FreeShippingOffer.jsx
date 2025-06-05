import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { motion } from "motion/react";

const FreeShippingOffer = () => {
  return (
    <>
      <section className="container mx-auto ">
        <motion.div
          className="bg-white border-2 border-b-black py-4 rounded-lg text-center flex items-center justify-evenly gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-4xl text-background-dark">
            <FaShippingFast className=" text-background-dark" />
            <h2 className="font-semibold">Free Shipping</h2>
          </div>
          <h2 className="font-semibold text-background-dark">
            Free Delivery Now On Your First Order and over TK:1999
          </h2>
          <p className="text-xl text-gray-600">Shop now and save!</p>
        </motion.div>
      </section>
    </>
  );
};

export default FreeShippingOffer;

import { motion } from "motion/react";
import {
  FaTruck,
  FaExchangeAlt,
  FaLock,
  FaGift,
  FaHeadphones,
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      {/* Top Features */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center py-8 border-b container mx-auto">
        {[
          { icon: <FaTruck size={28} />, text: "Free Shipping", sub: "For all Orders Over $100" },
          { icon: <FaExchangeAlt size={28} />, text: "30 Days Returns", sub: "For an Exchange Product" },
          { icon: <FaLock size={28} />, text: "Secured Payment", sub: "Payment Cards Accepted" },
          { icon: <FaGift size={28} />, text: "Special Gifts", sub: "Our First Product Order" },
          { icon: <FaHeadphones size={28} />, text: "Support 24/7", sub: "Contact us Anytime" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, type: "tween" }}
            className="flex flex-col items-center"
          >
            {item.icon}
            <h4 className="font-semibold mt-2">{item.text}</h4>
            <p className="text-sm text-gray-500">{item.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Middle Section */}
      <div className="grid md:grid-cols-4 gap-8 py-12 px-6 md:px-16 border-b">
        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact us</h4>
          <p>Urban Edge - Mega Super Store</p>
          <p>507-Union Trade Centre France</p>
          <p className="mt-3">sales@urbanedge.com</p>
          <p className="text-red-500 font-bold text-lg mt-2">(+880) 1799-543-210</p>
          <div className="flex items-center gap-2 mt-3">
            <FaHeadphones size={20} className="text-red-500" />
            <span>Online Chat Get Expert Help</span>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Products</h4>
          <ul className="space-y-2 text-sm">
            <li>Prices drop</li>
            <li>New products</li>
            <li>Best sales</li>
            <li>Contact us</li>
            <li>Sitemap</li>
            <li>Stores</li>
          </ul>
        </div>

        {/* Our company */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Our company</h4>
          <ul className="space-y-2 text-sm">
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>Terms and conditions of use</li>
            <li>About us</li>
            <li>Secure payment</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Subscribe to newsletter</h4>
          <p className="text-sm text-gray-500 mb-4">Subscribe to our latest newsletter to get news about special discounts.</p>
          <input
            type="email"
            placeholder="Your Email Address"
            className="border w-full p-2 mb-3 rounded"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded w-full">SUBSCRIBE</button>
          <div className="flex items-center mt-3">
            <input type="checkbox" id="agree" className="mr-2" />
            <label htmlFor="agree" className="text-sm">I agree to the terms and conditions and the privacy policy</label>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center py-6 px-6 md:px-16 gap-4">
        <p className="text-sm text-gray-500">© 2025 - Urban Edge ltd</p>
        <div className="flex gap-3 text-gray-600 text-lg">
          <FaFacebookF />
          <FaYoutube />
          <FaPinterestP />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

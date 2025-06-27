import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  FaTruck,
  FaExchangeAlt,
  FaLock,
  FaGift,
  FaHeadphones,
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
  FaInstagram
} from 'react-icons/fa'
import { Link } from 'react-router'
//  Extract static features data outside the component scope
const topFeatures = [
  {
    icon: <FaTruck size={28} />,
    text: 'Free Shipping',
    sub: 'For all Orders Over $100'
  },
  {
    icon: <FaExchangeAlt size={28} />,
    text: '30 Days Returns',
    sub: 'For an Exchange Product'
  },
  {
    icon: <FaLock size={28} />,
    text: 'Secured Payment',
    sub: 'Payment Cards Accepted'
  },
  {
    icon: <FaGift size={28} />,
    text: 'Special Gifts',
    sub: 'Our First Product Order'
  },
  {
    icon: <FaHeadphones size={28} />,
    text: 'Support 24/7',
    sub: 'Contact us Anytime'
  }
]

const Footer = () => {
  // Memoize Framer Motion animation variant
  const featureAnimation = useMemo(
    () => ({
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 }
    }),
    []
  )

  return (
    <footer className="bg-white text-gray-800">
      {/* Top Features */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center py-8 border-b container mx-auto">
        {topFeatures.map((item, i) => (
          <motion.div
            key={i}
            initial={featureAnimation.initial}
            whileInView={featureAnimation.whileInView}
            transition={{ delay: i * 0.2, type: 'tween' }}
            className="flex flex-col items-center group"
            viewport={{ once: true }}
            
          >
            <span className='group-hover:text-warning transition-all duration-300 group-hover:-translate-y-3'>

            {item.icon}
            </span>
            <h4 className="font-semibold mt-2 text-black">{item.text}</h4>
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
          <p className="text-red-500 font-bold text-lg mt-2">
            (+880) 1799-543-210
          </p>
          <div className="flex items-center gap-2 mt-3">
            <FaHeadphones size={20} className="text-red-500" />
            <span>Online Chat Get Expert Help</span>
          </div>
        </div>

        {/* Products */}
        <FooterLinkSection
          title="Products"
          links={[
            'Prices drop',
            'New products',
            'Best sales',
            'Contact us',
            'Sitemap',
            'Stores'
          ]}
        />

        {/* Our company */}
        <FooterLinkSection
          title="Our company"
          links={[
            'Delivery',
            'Legal Notice',
            'Terms and conditions of use',
            'About us',
            'Secure payment',
            'Login'
          ]}
        />

        {/* Subscribe */}
        <div>
          <h4 className="font-semibold text-lg mb-4">
            Subscribe to newsletter
          </h4>
          <p className="text-sm text-gray-500 mb-4">
            Subscribe to our latest newsletter to get news about special
            discounts.
          </p>
          <input
            type="email"
            placeholder="Your Email Address"
            className="border w-full p-2 mb-3 rounded"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded w-full">
            SUBSCRIBE
          </button>
          <div className="flex items-center mt-3">
            <input type="checkbox" id="agree" className="mr-2" />
            <label htmlFor="agree" className="text-sm">
              I agree to the terms and conditions and the privacy policy
            </label>
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
  )
}

const FooterLinkSection = ({ title, links }) => (
  <div>
    <h4 className="font-semibold text-lg mb-4">{title}</h4>
    <ul className="space-y-2 text-sm">
      {links.map((linkText, idx) => (
        <li key={idx}>
          <Link
            to={`/${linkText.replace(/\s+/g, '-').toLowerCase()}`}
            className="hover:text-red-500 transition"
          >
            {linkText}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default Footer

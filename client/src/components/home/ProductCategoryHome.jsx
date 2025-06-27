import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { motion } from 'motion/react'
import { Link } from 'react-router'

// Categories Data
const categories = [
  {
    name: 'Fashion',
    image: 'https://serviceapi.spicezgold.com/download/1748409729550_fash.png',
    link: '/category/fashion'
  },
  {
    name: 'Electronics',
    image: 'https://serviceapi.spicezgold.com/download/1741660988059_ele.png',
    link: '/category/electronics'
  },
  {
    name: 'Bags',
    image: 'https://serviceapi.spicezgold.com/download/1741661045887_bag.png',
    link: '/category/bags'
  },
  {
    name: 'Footwear',
    image: 'https://serviceapi.spicezgold.com/download/1741661061379_foot.png',
    link: '/category/footwear'
  },
  {
    name: 'Groceries',
    image: 'https://serviceapi.spicezgold.com/download/1741661077633_gro.png',
    link: '/category/groceries'
  },
  {
    name: 'Beauty',
    image:
      'https://serviceapi.spicezgold.com/download/1741661092792_beauty.png',
    link: '/category/beauty'
  },
  {
    name: 'Wellness',
    image: 'https://serviceapi.spicezgold.com/download/1741661105893_well.png',
    link: '/category/wellness'
  },
  {
    name: 'Jewellery',
    image: 'https://serviceapi.spicezgold.com/download/1741661120743_jw.png',
    link: '/category/jewellery'
  }
]

const ProductCategoryHome = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName)
  }
  return (
    <section className="py-6 mx-auto ">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        breakpoints={{
          640: { slidesPerView: 4, spaceBetween: 10 },
          768: { slidesPerView: 4, spaceBetween: 10 },
          1024: { slidesPerView: 6, spaceBetween: 10 }
        }}
        modules={[Pagination]}
        className=""
      >
        {categories.length > 0 &&
          categories.map((category, index) => (
            <SwiperSlide key={index}>
              <Link
                to={category.link}
                onClick={() => handleSelectCategory(category.name)}
              >
                <div className="bg-white  rounded-xl p-4  flex flex-col items-center cursor-pointer hover:shadow-lg  justify-center mx-auto">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={category.image}
                    alt={category.name}
                    className="w-16 h-16 object-contain mb-2"
                  />
                  <p className="text-sm font-medium text-center">
                    {category.name}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  )
}

export default ProductCategoryHome

import React, { useState } from 'react'
import GridviewBar from './GridviewBar'
import ProductCard from './../ProductCard'
import { productData } from '../../home/PopularProducts'

const Productsitem = () => {
  const [columns, setColumns] = useState(4)

  const handlegridChange = (newColumns) => {
    setColumns(newColumns)
  }

  // Map columns value to valid Tailwind class
  const gridClass = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  }

  return (
    <>
      <section>
        <GridviewBar
          columns={columns}
          handlegridChange={handlegridChange}
          totalProducts={8}
        />
      </section>

      <section
        className={`sm:flex sm:flex-col md:grid ${gridClass[columns]} gap-4 p-4`}
      >
        {productData.map((item) => (
          <ProductCard
            discount={item.discount}
            image={item.image}
            brand={item.brand}
            title={item.title}
            rating={item.rating}
            originalPrice={item.originalPrice}
            offerPrice={item.offerPrice}
            onAddToCart={() => alert(`${item.title} added to cart!`)}
            key={item}
            columns={columns}
          />
        ))}
      </section>
    </>
  )
}

export default Productsitem

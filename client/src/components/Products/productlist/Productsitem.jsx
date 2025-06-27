import React, { useState, useMemo, useCallback } from 'react'
import GridviewBar from './GridviewBar'
import ProductCard from './../ProductCard'
import { productData } from '../../home/PopularProducts'

const Productsitem = () => {
  const [columns, setColumns] = useState(4)

  const handlegridChange = (newColumns) => {
    setColumns(newColumns)
  }

  const gridClass = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  }

  const gridClassValue = useMemo(() => gridClass[columns], [columns])

  const handleAddToCart = useCallback((title) => {
    alert(`${title} added to cart!`)
  }, [])

  return (
    <>
      <section>
        <GridviewBar
          columns={columns}
          handlegridChange={handlegridChange}
          totalProducts={productData.length}
        />
      </section>

      <section
        className={`sm:flex sm:flex-col md:grid ${gridClassValue} gap-4 p-4`}
      >
        {productData.map((item) => (
          <ProductCard
            key={item.title}
            discount={item.discount}
            image={item.image}
            brand={item.brand}
            title={item.title}
            rating={item.rating}
            originalPrice={item.originalPrice}
            offerPrice={item.offerPrice}
            onAddToCart={() => handleAddToCart(item.title)}
            columns={columns}
          />
        ))}
      </section>
    </>
  )
}

export default Productsitem

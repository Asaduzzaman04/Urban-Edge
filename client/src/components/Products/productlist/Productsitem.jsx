import React, { useState } from 'react'
import GridviewBar from './GridviewBar'
import ProductCard from './../ProductCard'

const Productsitem = () => {
  const [columns, setColumns] = useState(4)

  return (
    <>
      <section>
        <GridviewBar
          columns={columns}
          setColumns={setColumns}
          totalProducts={8}
        />
      </section>

      <section
        className={` sm:flex flex-col md:grid md:grid-cols-${columns} gap-4 p-4`}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <ProductCard key={item} columns={columns} />
        ))}
      </section>
    </>
  )
}

export default Productsitem

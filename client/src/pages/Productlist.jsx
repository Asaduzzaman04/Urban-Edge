import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Products/sidebar/Sidebar'
import Productsitem from '../components/Products/productlist/Productsitem'

const Productlist = () => {
  return (
    <>
      <section className="border w-full p-2 md:p-6 lg:p-8">
        <div className="grid grid-cols-4 grid-rows-2 gap-4">
          <div className="row-span-2 border">
            {/* sidebar-section  */}
            <Sidebar />
          </div>
          <div className="col-span-3 row-span-2 border">
            {/* product-list  */}
            <Productsitem />
          </div>
        </div>
      </section>
    </>
  )
}

export default Productlist

import React, { useState } from 'react'
import { TiThMenu } from 'react-icons/ti'
import { IoGridSharp } from 'react-icons/io5'

const Productsitem = () => {
  const [gridView, setGridView] = useState(true)
  const toggleView = () => {
    setGridView(!gridView)
  }

  return (
    <>
      {/* grid button for product list to show products in grid view */}
      <section></section>
      <section></section>
    </>
  )
}

export default Productsitem

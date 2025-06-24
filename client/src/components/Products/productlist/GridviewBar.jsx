import React, { useState } from 'react'
import { TiThMenu } from 'react-icons/ti'
import { IoGridSharp } from 'react-icons/io5'
import { BsFillGrid3X3GapFill, BsFillGridFill } from 'react-icons/bs'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import clsx from 'clsx'
import { Typography } from '@mui/material'
import SortMenu from './SortMenu'

const gridOptions = [
  { value: 1, icon: <TiThMenu /> },
  { value: 2, icon: <IoGridSharp /> },
  { value: 3, icon: <BsFillGridFill /> },
  { value: 4, icon: <BsFillGrid3X3GapFill /> }
]

const GridviewBar = ({
  columns,
  handlegridChange,
  totalProducts,
  handleSortChange
}) => {


  const handleSortSelect  = (value, lavel) =>{
    console.log(value);
    console.log(lavel);
  }
  return (
    <div className="flex items-center justify-between bg-accent/50 p-3 rounded">
      <div className="flex items-center gap-2">
        {/* Grid View Buttons */}
        {gridOptions.map(({ value, icon }) => (
          <button
            key={value}
            onClick={() => handlegridChange(value)}
            className={clsx(
              'p-2 border rounded-full',
              columns === value
                ? 'bg-background-dark text-white'
                : 'hover:bg-gray-300'
            )}
          >
            {icon}
          </button>
        ))}

        {/* Product Count */}
        <span className="ml-3 text-sm">
          There are {totalProducts} products.
        </span>
      </div>

      {/* Sort Filter Dropdown */}
      <SortMenu handleSortSelect={handleSortSelect} />
    </div>
  )
}

export default GridviewBar

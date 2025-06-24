import React from 'react'
import { TiThMenu } from 'react-icons/ti'
import { IoGridSharp } from 'react-icons/io5'

const GridviewBar = ({ columns, setColumns, totalProducts = 8 }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-3 rounded">
      {/* Left: View buttons + product count */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setColumns(1)}
          className={`p-2 border rounded-full ${
            columns === 1
              ? 'bg-background-dark text-white'
              : 'hover:bg-gray-300'
          }`}
        >
          <TiThMenu />
        </button>

        <button
          onClick={() => setColumns(2)}
          className={`p-2 border rounded-full ${
            columns > 1 ? 'bg-background-dark text-white' : 'hover:bg-gray-300'
          }`}
        >
          <IoGridSharp />
        </button>

        <span className="ml-3 text-sm">
          There are {totalProducts} products.
        </span>
      </div>

      {/* Right: Sort By */}
      <div className="flex items-center gap-2 text-sm">
        <span>Sort By</span>
        <select className="border rounded px-2 py-1 outline-none">
          <option>Name, A to Z</option>
          <option>Name, Z to A</option>
          <option>Price, Low to High</option>
          <option>Price, High to Low</option>
        </select>
      </div>
    </div>
  )
}

export default GridviewBar

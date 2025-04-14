import React from 'react'
import { assets } from '../assets/assets'

const Add = () => {
  return (
    <form className='flex flex-col w-full max-w-screen-lg mx-auto items-start gap-4'>

      {/* Upload Section */}
      <div>
        <p className='mb-1 text-sm font-medium'>Upload Image</p>
        <div className='flex gap-3'>
          {[1, 2, 3, 4].map((num) => (
            <label key={num} htmlFor={`image${num}`}>
              <img className='w-20 h-20 border rounded-md cursor-pointer' src={assets.upload_area} alt="" />
              <input type="file" id={`image${num}`} hidden />
            </label>
          ))}
        </div>
      </div>

      {/* Product Name */}
      <div className='w-full'>
        <p className='mb-1 text-sm font-medium'>Product name</p>
        <input 
          className='w-full max-w-[500px] px-3 py-2 border rounded-md outline-none' 
          type="text" 
          placeholder='Type here' 
          required 
        />
      </div>

      {/* Product Description */}
      <div className='w-full'>
        <p className='mb-1 text-sm font-medium'>Product description</p>
        <textarea 
          className='w-full max-w-[500px] px-3 py-2 border rounded-md outline-none resize-none overflow-y-scroll' 
          placeholder='Write content here' 
          rows="3"
          required 
        />
      </div>

      {/* Category, Subcategory, Price */}
      <div className='w-full flex flex-wrap gap-4'>

        <div className='flex flex-col w-full max-w-[160px]'>
          <label className='text-sm font-medium mb-1'>Product category</label>
          <select className='px-3 py-2 border rounded-md outline-none'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className='flex flex-col w-full max-w-[160px]'>
          <label className='text-sm font-medium mb-1'>Sub category</label>
          <select className='px-3 py-2 border rounded-md outline-none'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div className='flex flex-col w-full max-w-[160px]'>
          <label className='text-sm font-medium mb-1'>Product Price</label>
          <input 
            className='px-3 py-2 border rounded-md outline-none' 
            type="number" 
            placeholder='25' 
          />
        </div>

      </div>

      {/* Product Sizes */}
      <div>
        <p className='text-sm font-medium mb-1'>Product Sizes</p>
        <div className='flex gap-2 flex-wrap'>
          {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <div 
              key={size}
              className='border rounded px-3 py-1 text-sm cursor-pointer hover:bg-gray-100'
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input type="checkbox" id='bestseller' />
        <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
      </div>

      <button type="submit" className='w-28 py-3 mt-4 bg-black text-white '>ADD</button>

    </form>
  )
}

export default Add

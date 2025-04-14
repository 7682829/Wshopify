import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'

const Add = () => {

  const [image1,setImage1] = useState(false)
  const [image2,setImage2] = useState(false)
  const [image3,setImage3] = useState(false)
  const [image4,setImage4] = useState(false)

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear"); 
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);
  
  return (
    <form className='flex flex-col w-full max-w-screen-lg mx-auto items-start gap-4'>

      {/* Upload Section */}
      <div>
        <p className='mb-1 text-sm font-medium'>Upload Image</p>
        <div className='flex gap-3'>

          {/* Image 1 */}
          <label htmlFor="image1">
            <img 
              className='w-20 h-20 object-cover border rounded cursor-pointer' 
              src={image1 ? URL.createObjectURL(image1) : assets.upload_area} 
              alt="" 
            />
            <input 
              type="file" 
              id="image1" 
              hidden 
              onChange={(e) => setImage1(e.target.files[0])} 
            />
          </label>

          {/* Image 2 */}
          <label htmlFor="image2">
            <img 
              className='w-20 h-20 object-cover border rounded cursor-pointer' 
              src={image2 ? URL.createObjectURL(image2) : assets.upload_area} 
              alt="" 
            />
            <input 
              type="file" 
              id="image2" 
              hidden 
              onChange={(e) => setImage2(e.target.files[0])} 
            />
          </label>

          {/* Image 3 */}
          <label htmlFor="image3">
            <img 
              className='w-20 h-20 object-cover border rounded cursor-pointer' 
              src={image3 ? URL.createObjectURL(image3) : assets.upload_area} 
              alt="" 
            />
            <input 
              type="file" 
              id="image3" 
              hidden 
              onChange={(e) => setImage3(e.target.files[0])} 
            />
          </label>

          {/* Image 4 */}
          <label htmlFor="image4">
            <img 
              className='w-20 h-20 object-cover border rounded cursor-pointer' 
              src={image4 ? URL.createObjectURL(image4) : assets.upload_area} 
              alt="" 
            />
            <input 
              type="file" 
              id="image4" 
              hidden 
              onChange={(e) => setImage4(e.target.files[0])} 
            />
          </label>

        </div>
      </div>

      {/* Product Name */}
      <div className='w-full'>
        <p className='mb-1 text-sm font-medium'>Product name</p>
        <input 
          className='w-full max-w-[500px] px-3 py-2 border rounded-md outline-none' 
          type="text" 
          placeholder='Type here' 
          onChange={(e)=>setName(e.target.value)} 
          value={name}
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
          onChange={(e)=>setDescription(e.target.value)} 
          value={description}
          required 
        />
      </div>

      {/* Category, Subcategory, Price */}
      <div className='w-full flex flex-wrap gap-4'>

        <div className='flex flex-col w-full max-w-[160px]'>
          <label className='text-sm font-medium mb-1'>Product category</label>
          <select onChange={(e)=>setCategory(e.target.value)} className='px-3 py-2 border rounded-md outline-none'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className='flex flex-col w-full max-w-[160px]'>
          <label className='text-sm font-medium mb-1'>Sub category</label>
          <select onChange={(e)=>setSubCategory(e.target.value)} className='px-3 py-2 border rounded-md outline-none'>
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
            onChange={(e)=>setPrice(e.target.value)}
            value={price}
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
              onClick={() => 
                setSizes(prev => 
                  prev.includes(size) 
                    ? prev.filter(item => item !== size) 
                    : [...prev, size]
                )
              }
              className={`border rounded px-3 py-1 text-sm cursor-pointer hover:bg-gray-100
                ${sizes.includes(size) ? 'bg-black text-white' : ''}`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input 
          type="checkbox" 
          id='bestseller' 
          checked={bestseller}
          onChange={(e) => setBestseller(e.target.checked)}
        />
        <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
      </div>

      <button type="submit" className='w-28 py-3 mt-4 bg-black text-white '>ADD</button>

    </form>
  )
}

export default Add

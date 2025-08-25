import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("Men")
  const [subCategory, setSubCategory] = useState("Topwear")
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])

  // 🔹 Clean up object URLs on unmount to avoid memory leaks
  useEffect(() => {
    return () => {
      if (image1) URL.revokeObjectURL(image1)
      if (image2) URL.revokeObjectURL(image2)
      if (image3) URL.revokeObjectURL(image3)
      if (image4) URL.revokeObjectURL(image4)
    }
  }, [image1, image2, image3, image4])

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      )

      if (response.data.success) {
        toast.success(response.data.message)

        // 🔹 Reset all fields
        setName("")
        setDescription("")
        setPrice("")
        setCategory("Men")
        setSubCategory("Topwear")
        setSizes([])
        setBestseller(false)
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full max-w-screen-lg mx-auto items-start gap-4"
    >
      <div>
        <p className="mb-1 text-sm font-medium">Upload Image</p>
        <div className="flex gap-3">
          {[1, 2, 3, 4].map((num) => {
            const imgState = eval(`image${num}`)
            const setImgState = eval(`setImage${num}`)
            return (
              <label key={num} htmlFor={`image${num}`}>
                <img
                  className="w-20 h-20 object-cover border rounded cursor-pointer"
                  src={imgState ? URL.createObjectURL(imgState) : assets.upload_area}
                  alt=""
                />
                <input
                  type="file"
                  id={`image${num}`}
                  hidden
                  onChange={(e) => setImgState(e.target.files[0])}
                />
              </label>
            )
          })}
        </div>
      </div>

      <div className="w-full">
        <p className="mb-1 text-sm font-medium">Product name</p>
        <input
          className="w-full max-w-[500px] px-3 py-2 border rounded-md outline-none"
          type="text"
          placeholder="Type here"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-1 text-sm font-medium">Product description</p>
        <textarea
          className="w-full max-w-[500px] px-3 py-2 border rounded-md outline-none resize-none overflow-y-scroll"
          placeholder="Write content here"
          rows="3"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
      </div>

      <div className="w-full flex flex-wrap gap-4">
        <div className="flex flex-col w-full max-w-[160px]">
          <label className="text-sm font-medium mb-1">Product category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2 border rounded-md outline-none"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>

        <div className="flex flex-col w-full max-w-[160px]">
          <label className="text-sm font-medium mb-1">Sub category</label>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="px-3 py-2 border rounded-md outline-none"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Bags">Bags</option>
            <option value="Sunglasses">Sunglasses</option>
            <option value="Hats">Hats</option>
            <option value="Jewelry">Jewelry</option>
            <option value="Perfumes">Perfumes</option>
            <option value="Footwear">Footwear</option>
          </select>
        </div>

        <div className="flex flex-col w-full max-w-[160px]">
          <label className="text-sm font-medium mb-1">Product Price</label>
          <input
            className="px-3 py-2 border rounded-md outline-none"
            type="number"
            placeholder="25"
            min="0"
            required
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
      </div>

      <div>
        <p className="text-sm font-medium mb-1">Product Sizes</p>
        <div className="flex gap-2 flex-wrap">
          {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <div
              key={size}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((item) => item !== size)
                    : [...prev, size]
                )
              }
              className={`border rounded px-3 py-1 text-sm cursor-pointer hover:bg-gray-100 ${
                sizes.includes(size) ? 'bg-black text-white' : ''
              }`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input
          type="checkbox"
          id="bestseller"
          checked={bestseller}
          onChange={(e) => setBestseller(e.target.checked)}
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white ">
        ADD
      </button>
    </form>
  )
}

export default Add

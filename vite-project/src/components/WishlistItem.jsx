import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const WishlistItem = ({id, image, name, price, subCategory, sizes}) => {
    const { currency, addToCart, removeFromWishlist } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState('');

    const handleRemoveFromWishlist = (e) => {
        e.preventDefault(); // Prevent Link navigation
        removeFromWishlist(id);
    };

    const handleAddToCart = (e) => {
        e.preventDefault(); // Prevent Link navigation
        
        // For topwear and bottomwear, check if size is selected
        if ((subCategory === 'Topwear' || subCategory === 'Bottomwear') && !selectedSize) {
            alert('Please select a size before adding to cart');
            return;
        }
        
        // Use selected size for topwear/bottomwear, default size for others
        const sizeToUse = (subCategory === 'Topwear' || subCategory === 'Bottomwear') ? selectedSize : 'M';
        addToCart(id, sizeToUse, subCategory);
        
        // Optionally show a success message
        alert('Item added to cart successfully!');
    };

    const requiresSize = subCategory === 'Topwear' || subCategory === 'Bottomwear';

    return (
        <div className='text-gray-700 dark:text-gray-300 cursor-pointer relative h-full flex flex-col'>
            <Link to={`/product/${id}`} className="block">
                <div className='overflow-hidden aspect-[3/4] mb-3 rounded-lg'>
                    <img className='hover:scale-110 transition ease-in-out w-full h-full object-cover' src={image[0]} alt="" />
                </div>
            </Link>
            
            <button 
                onClick={handleRemoveFromWishlist}
                className="absolute top-2 right-2 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-700"
            >
                <svg 
                    className="w-5 h-5 text-red-500"
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/>
                </svg>
            </button>
            
            <div className="flex-grow flex flex-col">
                <Link to={`/product/${id}`} className="block flex-grow">
                    <p className='pt-3 pb-1 text-sm'>{name}</p>
                    <p className='text-sm font-medium mb-3'>{currency}{price}</p>
                </Link>
                
                {/* Size Selection for Topwear and Bottomwear */}
                {requiresSize && (
                    <div className="mb-3">
                        <p className="text-xs font-medium mb-2 text-gray-600 dark:text-gray-400">Select Size:</p>
                        <div className="flex gap-1 flex-wrap">
                            {sizes && sizes.map((size, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedSize(size);
                                    }}
                                    className={`border py-1 px-2 text-xs rounded ${
                                        size === selectedSize 
                                            ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black' 
                                            : 'border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                
                {/* Add to Cart Button */}
                <button 
                    onClick={handleAddToCart}
                    className={`w-full py-2 px-4 rounded-md transition-colors text-sm font-medium ${
                        requiresSize && !selectedSize 
                            ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed' 
                            : 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200'
                    }`}
                    disabled={requiresSize && !selectedSize}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default WishlistItem

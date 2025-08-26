import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const WishlistItem = ({id, image, name, price}) => {
    const { currency, addToCart, removeFromWishlist } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState('');

    const handleRemoveFromWishlist = (e) => {
        e.preventDefault(); // Prevent Link navigation
        removeFromWishlist(id);
    };

    const handleAddToCart = (e) => {
        e.preventDefault(); // Prevent Link navigation
        
        // For items that require size selection, we'll default to a common size
        // You might want to modify this based on your product structure
        const defaultSize = 'M'; // or get available sizes from product data
        addToCart(id, defaultSize);
        
        // Optionally show a success message or remove from wishlist after adding to cart
        // removeFromWishlist(id); // Uncomment if you want to remove from wishlist after adding to cart
    };

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
                
                {/* Add to Cart Button */}
                <button 
                    onClick={handleAddToCart}
                    className="w-full bg-black dark:bg-white text-white dark:text-black py-2 px-4 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm font-medium"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default WishlistItem

import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id, image, name, price}) => {
    const { currency, addToWishlist, removeFromWishlist, isInWishlist } = useContext(ShopContext);

    const handleWishlistClick = (e) => {
        e.preventDefault(); // Prevent Link navigation when clicking wishlist button
        if (isInWishlist(id)) {
            removeFromWishlist(id);
        } else {
            addToWishlist(id);
        }
    };

    return (
        <Link className='text-gray-700 dark:text-gray-300 cursor-pointer relative h-full flex flex-col' to={`/product/${id}`}>
            <div className='overflow-hidden aspect-[3/4] mb-3'>
                <img className='hover:scale-110 transition ease-in-out w-full h-full object-cover' src={image[0]} alt="" />
            </div>
            <button 
                onClick={handleWishlistClick}
                className="absolute top-2 right-2 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-700"
            >
                <svg 
                    className={`w-5 h-5 ${isInWishlist(id) ? 'text-red-500' : 'text-gray-400 dark:text-gray-500'}`}
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/>
                </svg>
            </button>
            <div className="flex-grow">
                <p className='pt-3 pb-1 text-sm'>{name}</p>
                <p className='text-sm font-medium'>{currency}{price}</p>
            </div>
        </Link>
    )
}

export default ProductItem
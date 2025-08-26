import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import WishlistItem from '../components/WishlistItem';

const Wishlist = () => {
  const { 
    wishlistItems, 
    removeFromWishlist,
    products 
  } = useContext(ShopContext);

  const wishlistProducts = Object.keys(wishlistItems)
    .map(id => products.find(item => item._id === id))
    .filter(Boolean); 

  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      {wishlistProducts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Your wishlist is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistProducts.map(product => (
            <WishlistItem 
              key={product._id} 
              id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
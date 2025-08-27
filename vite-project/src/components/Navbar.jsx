import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import styles from './Navbar.module.css'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch, 
    getCartCount, 
    navigate, 
    token, 
    setToken, 
    setCartItems,
    getWishlistCount,
    logout
  } = useContext(ShopContext);

  
  return (
    <div className="bg-white dark:bg-black shadow-sm">
      <header className={`${styles.header} text-black dark:text-white`}>
        <Link to='/' className={`${styles.logo} text-black dark:text-white`}>AURÉLINE</Link>
        
        <div className={`${styles.hamburger} ${visible ? styles.active : ''}`} onClick={() => setVisible(!visible)}>
        <span className={`${styles.bar} bg-black dark:bg-white`}></span>
        <span className={`${styles.bar} bg-black dark:bg-white`}></span>
        <span className={`${styles.bar} bg-black dark:bg-white`}></span>
      </div>

      <ul className={`${styles.menu} text-black dark:text-white`}>
        <li><NavLink to='/' className="text-black dark:text-white">HOME</NavLink></li>
        <li><NavLink to='/collection' className="text-black dark:text-white">COLLECTIONS</NavLink></li>
        <li><NavLink to='/about' className="text-black dark:text-white">ABOUT</NavLink></li>
        <li><NavLink to='/contact' className="text-black dark:text-white">CONTACT US</NavLink></li>
      </ul>

      <div className={`${styles.navbarIcons} text-black dark:text-white`}>
        {/* Search Icon */}
        <svg className={`${styles.icon} text-black dark:text-white`} onClick={() => setShowSearch(true)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>

        {/* Cart Icon */}
        <Link to='/cart' className="relative">
          <svg className={`${styles.icon} text-black dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clipRule="evenodd"/>
          </svg>
          <span className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black dark:bg-white text-white dark:text-black aspect-square rounded-full text-[8px]'>{getCartCount()}</span>
        </Link>

        {/* Wishlist Icon */}
        <Link to='/wishlist' className="relative">
          <svg className={`${styles.icon} text-black dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/>
          </svg>
          {getWishlistCount() > 0 && (
            <span className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black dark:bg-white text-white dark:text-black aspect-square rounded-full text-[8px]'>
              {getWishlistCount()}
            </span>
          )}
        </Link>

        {/* Theme Toggle */}
        <ModeToggle />

        {/* Profile Icon */}
        <div className="relative group">
          <svg className={styles.icon} onClick={() => token ? null : navigate('/login')} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd"/>
          </svg>
          
          {token && (
            <div className={`${styles.dropdownMenu} group-hover:block bg-white dark:bg-black border dark:border-gray-700`}>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 text-gray-500 dark:text-gray-400'>
                <p className='cursor-pointer hover:text-black dark:hover:text-white'>My Profile</p>
                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black dark:hover:text-white'>Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-black dark:hover:text-white'>Logout</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${visible ? styles.active : ''} bg-white dark:bg-black`}> 
        <button onClick={() => setVisible(false)} className={`${styles.closeButton} text-black dark:text-white`}>
          ✕
        </button>
        <NavLink onClick={() => setVisible(false)} to='/' className="text-black dark:text-white">HOME</NavLink>
        <NavLink onClick={() => setVisible(false)} to='/collection' className="text-black dark:text-white">COLLECTIONS</NavLink>
        <NavLink onClick={() => setVisible(false)} to='/about' className="text-black dark:text-white">ABOUT</NavLink>
        <NavLink onClick={() => setVisible(false)} to='/contact' className="text-black dark:text-white">CONTACT US</NavLink>
      </div>
    </header>
    </div>
  )
}

export default Navbar
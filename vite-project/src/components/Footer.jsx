import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='bg-white dark:bg-black'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600 dark:text-gray-300'>
                сука блять!
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5 text-gray-900 dark:text-white'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600 dark:text-gray-300'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5 text-gray-900 dark:text-white'>Connect with Us</p>
                <ul className='flex flex-col  gap-1 text-gray-600 dark:text-gray-300'>
                    <li>+420 678-456-123</li>
                    <li>support@forever.com</li>
                </ul>
            </div>

            <div className='col-span-full w-full flex flex-col items-center'>
                <hr className='w-full my-4 border-gray-300 dark:border-gray-600'/>
                <p className='py-5 text-sm text-center text-gray-600 dark:text-gray-300' > Copyright 2025 @forever.com - All Rights Reserved.</p>
            </div>

        </div>
    </div>
  )
}

export default Footer;

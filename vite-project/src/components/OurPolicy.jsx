import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 bg-white dark:bg-black'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5 ' alt="" />
            <p className='font-semibold text-gray-900 dark:text-white' >Exchange Policy</p>
            <p className='text-gray-400 dark:text-gray-300'>We offer hassle free exchange of items! :D</p>
        </div>
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5 ' alt="" />
            <p className='font-semibold text-gray-900 dark:text-white' >7 Days Return Policy</p>
            <p className='text-gray-400 dark:text-gray-300'>We provide a 7-day easy return guarantee :P</p>
        </div>
        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5 ' alt="" />
            <p className='font-semibold text-gray-900 dark:text-white' >Best Customer Support</p>
            <p className='text-gray-400 dark:text-gray-300'>Our team is available around the clock for assisstance ^_^</p>
        </div>
      
    </div>
  )
}

export default OurPolicy;

import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();

    }


  return (
    <div className='text-center bg-white dark:bg-black py-8'>
        <p className='text-2xl font-medium text-gray-800 dark:text-white' >Subscribe now and get 15% off!!</p>
        <p className='text-gray-400 dark:text-gray-300 mt-3 ' >
            Sample text 
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 dark:border-gray-600 pl-3 bg-white dark:bg-black'>
            <input className='w-full sm:felx-1 outline-none bg-transparent text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400' type="email" placeholder='Enter your email:' required/>
            <button type='submit' className='bg-black dark:bg-white text-white dark:text-black text-s px-10 py-4'>SUBSCRIBE</button>
        </form>
      
    </div>
  )
}

export default NewsletterBox

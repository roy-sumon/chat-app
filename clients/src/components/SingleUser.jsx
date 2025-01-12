import React from 'react'
import user from '../assets/sumon.jpg'

const SingleUser = () => {
  return (
    <div className='flex gap-2 cursor-pointer duration-300 items-center my-2 py-1 px-1 rounded-md bg-custom_bg_three hover:bg-custom_bg_one'>
        <div className='w-10'>
            <img src={user} className='rounded-full' alt="single user" />
        </div>
        <h1 className='font-semibold'>Sumon Roy</h1>
    </div>
  )
}

export default SingleUser
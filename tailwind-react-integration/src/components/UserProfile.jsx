import React from 'react'

function UserProfile() {
  return (
    <div className="bg-gray-100 max-w-sm mx-auto my-20 rounded-lg shadow-lg sm:p-4 sm:max-w-xs sm:text-sm md:text-base md:p-8 md:max-w-sm">
      <img className="rounded-full mx-auto md:w-36 md:h-36 sm:w-24 sm:h-24 hover:scale-110 transition-transform duration-300 ease-in-out" src="https://via.placeholder.com/150" alt="User" />
      <h1 className='sm:text-lg md:text-xl text-blue-800 my-4 hover:text-blue-500'>John Doe</h1>
      <p className='text-gray-600 sm:text-sm md:text-base hover:shadow-xl'>Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  )
}

export default UserProfile
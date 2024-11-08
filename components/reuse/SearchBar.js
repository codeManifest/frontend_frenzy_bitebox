import React from 'react'

export default function 
() {
  return (
    <div className='flex gap-4 items-center my-4 ' >
        <input type="search" name="search" id="" className='px-3 w-[50vw] m-auto  py-5 border border-orange-500 rounded-full' placeholder='Search for restaurant, Cuisin or a Dish' />
        <button className='py-5 px-8 w-[200px] rounded-full bg-orange-300 hover:bg-orange-200 transition-all' >
            Search
        </button>

    </div>
  )
}

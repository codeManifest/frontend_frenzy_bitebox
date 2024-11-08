import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div className=' px-9 py-4 flex justify-between'>
        <div className="logo text-2xl ">BiteBox</div>
        <nav className='flex gap-3 items-center text-xl font-medium'>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Add Restaurant</Link>
            <Link href={'/'}>Login</Link>
            <Link href={'/'}>Signup</Link>
        </nav>
    </div>
  )
}

export default Nav
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className="relative z-10 flex items-center md:justify-between justify-center py-4 sm:py-8 px-4 sm:px-20">
          <Link to={'/'} className="font-extrabold text-4xl hidden md:block">
          <img src="/images/1.png" className='w-[4vw] min-w-12' alt="" />
          </Link>
          <div className="flex w-full max-w-130 justify-evenly gap-2 sm:gap-8 border border-zinc-600 p-1 rounded-full">
              <Link to={"#"} className='cursor-pointer py-1.5 px-2 rounded-full'>Link 1</Link>
              <Link to={"#"} className='cursor-pointer py-1.5 px-2 rounded-full'>Link 2</Link>
              <Link to={"#"} className='cursor-pointer py-1.5 px-2 rounded-full'>Link 3</Link>
              <Link to={"#"} className='cursor-pointer py-1.5 px-2 rounded-full'>Link 4</Link>
          </div>
          <div>
            <button className='border border-green-400 py-1 px-3 rounded-full cursor-pointer hidden md:block text-sm'>Login</button>
          </div>
      </nav>
  )
}

export default Navbar
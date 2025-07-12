import React from 'react'
import Logo from './Logo';
import { MdManageSearch } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="h-16 shadow-md bg-white ">
      <div className="h-full container max-auto flex items-center px-4 justify-between">
        <div className="">
          <Link to={"/"}>
          <Logo w={90} h={50} />
          </Link> 
        </div>
        <div className='flex items-center gap-2 border border-gray-300 rounded-full focus-within:shadow-md px-2'>
          <input type="text" placeholder="Search for products..." className='w-full outline-none' />
          <div className='bg-gray-200 p-2 rounded-full'><MdManageSearch /></div>
        </div>
        <div className='flex items-center gap-5'>
          <div className='text-2xl text-gray-500 hover:text-gray-700 cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12 '>
            <FaUser />
          </div>

                     <div className='text-2xl text-gray-500 hover:text-gray-700 cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12 relative'>
             <GrCart />
             <div className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
               0
             </div>
           </div>
          <div className='flex items-center gap-2'>
            <Link to={"/login"} className='bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 '>Login</Link>
            <Link className='bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 '>Signup</Link>

          </div>

        </div>
      </div>

    </header>
  )
}

export default Header

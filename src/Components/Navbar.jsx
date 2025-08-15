import React from 'react'
import { FaUserPlus, FaUser, FaLock, FaEnvelope,FaShoppingCart } from "react-icons/fa";
function Navbar() {
  return (
    <div className='flex justify-between items-center p-6 border-b-gray-300 border-b-2'>
        <h1 className='font-[Poppins] font-semibold text-[#2563EB] text-[2.5rem]'>FoxGadget</h1>
        <nav className='flex items-center '>
            <input type="text" placeholder="Search..." className='w-[40rem] h-[3.5rem] mr-[30rem]  bg-gray-100 p-4 rounded-[12px]'  />
            <button className="px-4 py-2 bg-[#2563EB] text-white font-[Poppins] font-medium rounded-lg hover:bg-blue-600">
             Login
            </button>
            <button className="ml-4 px-4 py-2 border border-l- border-[#2563EB] text-[#2563EB] font-[Poppins] font-medium rounded-lg hover:bg-blue-50">
             Register
            </button>
            <button className='ml-[0.5rem] p-4 bg-[#2563EB] text-white rounded-full   hover:bg-blue-600 transition duration-300 ' >
                <FaShoppingCart className="text-2xl " />
            </button>
        </nav>
    </div>
  )
}

export default Navbar
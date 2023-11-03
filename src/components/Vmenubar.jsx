import React from 'react'

function VmenuBar({handleOpen,open,handleClose}) {
  return (
    <>

    <div style={open ? {display:"block"} : {display:"none"}}
     className='h-screen z-20  ml-6 flex flex-col fixed top-0 bottom-0 py-1'>
      <nav className=' bg-white rounded-r-3xl h-full shadow-2xl'>

        <ul className=' px-12  p-2  '>
         <div className=' flex gap-2'>
        <a href="#" className=" font-black  text-base">MARKET </a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>
        </div>
        </ul>
<ul className='pl-8 mt-12 text-sm'>
          <li className='mt-5 hover:bg-orange-500 hover:text-white rounded-md mx-2 p-2'>Dashboard</li>
          <li className='mt-5 hover:bg-orange-500 hover:text-white rounded-md mx-2 p-2'>Compaigns</li>
          <li className='mt-5 hover:bg-orange-500 hover:text-white rounded-md mx-2  p-2'>Contact</li>
          <li className='mt-5 hover:bg-orange-500 hover:text-white rounded-md mx-2  p-2'>Categories</li>
          <li className='mt-5 hover:bg-orange-500 hover:text-white rounded-md mx-2 p-2'>Reporting</li>
          <li className='mt-5 hover:bg-orange-500 hover:text-white rounded-md mx-2 p-2'>Email Template</li>
        </ul>
        </nav>
    </div>
    </>
  )
}

export default VmenuBar
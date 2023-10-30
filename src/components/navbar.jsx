import React from 'react'

function NavBar() {
  return (
    <>
    {/* horizontal navbar */}
      <div  className="bg-white z-10 fixed left-0 top-0 right-0  ml-2 ">
      <nav className='border-b-2 py-2 px-3'>
  <div className="flex items-center justify-between ">
    <div className="flex items-center ">

   
      <a href="#" className=" font-black pl-12 text-base  gap-2">MARKET </a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>

    </div>

    <div className="flex items-center space-x-4">
       
      <input type="text" placeholder="Search" className="ml-4 py-1 px-3 text-xs rounded border-2 outline-slate-100  placeholder-slate-900  focus:ring-black"></input>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
</svg>

      
      <a href="#" className="text-white rounded-full  bg-orange-500 hover:text-black">MA</a>
      
    </div>
  </div>
</nav>
      </div>

    

</>
  )
}

export default NavBar
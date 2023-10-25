import React from 'react'
import Login from './components/login'

import './index.css'
function App() {
  return (
    <>
    <div className=" grid grid-cols-12  m-8 rounded-md border-orange-500 border-2 h-screen ">
  <div className=' col-span-8 flex justify-center items-center bg-white  '><img className='w-50% h-50%  bg-transparent mix-blend-multiply' src="pic/1.jpg" alt="hi"  />
  </div>
  
  <div className='col-span-4  bg-orange-500   text-white flex justify-center  items-center '><Login/></div>
</div>
</>
  )
}

export default App
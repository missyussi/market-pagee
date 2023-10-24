import React from 'react'
import Login from './components/login'
import './index.css'
function App() {
  return (
    <div className=" grid grid-cols-12  m-8 rounded-md border-orange-500 border-2 h-screen ">
  <div className=' col-span-7 w-full h-auto justify-center bg-white'><img src="pic/1.jpg" alt="hi" srcset="" />
  </div>
  
  <div className='col-span-5  bg-orange-500   text-white justify-center flex items-center justify-items-center'><Login/></div>
</div>
  )
}

export default App
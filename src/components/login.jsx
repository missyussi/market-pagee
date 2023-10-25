 import { useState,React } from "react";

  function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const handleSubmit = (e) => {
       e.preventDefault();
       console.log("Email: ", email);
       console.log("Password: ", password);
    };
  return (
  
    <div className=' w-64'>
        <h1 className='font-bold text-lg'>MARKET</h1>
        <p className='font-light text-sm'>Login to Continue to your account</p>
        <br />
        
        <form action="" onSubmit={handleSubmit}>

        <input type='email' name="email" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder='Email' className="mt-3 rounded-full   bg-transparent  text-black outline-white px-10  ring-2 ring-white placeholder-white" />
       

        <br />
        <input type='password' name="password" value={password} onChange={(e) => setPassword(e.target.value)}
         placeholder='Password' className=" rounded-full  bg-transparent text-black outline-white mt-3  px-10 ring-white ring-2 placeholder-white" />
        
      <br />
        <a className=' text-xs ml-20 pl-12 '>Forget your Password</a>

        <br />
        <button type="submit"  className='text-center border-white bg-white text-orange-500 rounded-full px-9 py-1 mt-6 mx-16 font-medium text-sm'>Login</button>
        </form>
        
    </div>
  )}

export default Login
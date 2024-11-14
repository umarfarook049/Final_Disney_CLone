import React, { useState } from 'react'
import logo from "../images/logo.png"
import user from "../images/user.png"
import search from "../images/search.png"
import home from "../images/home.png"
import love from "../images/love.png"
import action from "../images/action.png"
import comedy from "../images/comedy.png"
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [touch,setTouch ]  = useState(false);
    



    return (
        <div className='z-20 fixed grid grid-cols-2 bg-black h-full w-24'>
            <div onMouseEnter={() => setTouch(true)} onMouseLeave={()=> setTouch(false)}>
                <img src={logo} className='w-28 ml-5 mt-5'/>
               <Link to="/Signin"> <img src={user} className='w-5 ml-9 mt-8 cursor-pointer'/></Link>
                <Link to="/search"><img src={search} className='w-9 ml-7 mt-8 cursor-pointer'/></Link>
                <Link to="/"><img src={home} className='w-9 ml-7 mt-8 cursor-pointer'/></Link>
                <img src={love} className='w-16 mt-8 ml-5 cursor-pointer'/>
                <img src={action} className='w-16 mt-8 ml-5 cursor-pointer'/>
                <img src={comedy} className='w-16 mt-8 ml-5 cursor-pointer'/>
            </div>
         {touch &&<div className='z-20 ml-8 w-20 bg-black h-screen font-bold text-base text-slate-300'>
                    <h4 className='mt-20'>Signin</h4>
                    <h4 className='mt-8'>Search</h4>
                    <h4 className='mt-12'>Home</h4>
                    <h4 className='mt-10'>Love</h4>
                    <h4 className='mt-10'>Action</h4>
                    <h4 className='mt-11'>Comedy</h4>    
            </div>}
        </div>
    )
}

export default Navbar
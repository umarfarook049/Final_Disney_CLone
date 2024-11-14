import React from 'react'
import { LuFacebook } from "react-icons/lu";
import ps1 from '../images/ps1.png'
import { LiaCopyrightSolid } from "react-icons/lia";


const Footer = () => {
  return (
    <div className='pt-24 pl-24 pr-24 pb-24 text-white ml-20'>
      <div className='font-bold flex justify-between'><span>Company <br /><br /><span className='text-slate-300 font-normal'>about us <br /> careers</span></span> <span>View Website <br /><br /><span className='text-slate-300 font-normal'>English</span></span> <span>Need Help? <br /><br /><span className='text-slate-300 font-normal'>visit help center <br />share feedback</span></span> <span>connect with us <br /><br /><span><LuFacebook className='h-6 w-6'/></span> </span> </div>
      <div className='flex justify-between'><span className='flex text-slate-500 mt-4 font-normal'><LiaCopyrightSolid className='mt-1 w-4 h-4 mr-2' />2024 STAR. All Rights Reserved. Terms Of Use  Privacy Policy FAQ</span><span><a href="https://play.google.com/store/apps/details?id=in.startv.hotstar&hl=en_IN"><img src={ps1} alt="" className='w-36 h-12' /></a></span></div>
      </div>
  )
}

export default Footer

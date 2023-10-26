
import React from 'react'
import logo from './logo2 (1).png'

const Footer = () => {
  return (
    <div>
        <div className="w-full h-36 flex items-center justify-between  bg-gray-100 text-white">
           <div className="w-16 ml-44">
            <img src={logo} alt="" className='' />
           </div>
           <div className="div">
              <p className='text-black font-light'>Made by harsh</p>
           </div>
           <div className="div w-36 mr-44">
            <ul className='flex'>
                <li className='text-black  mr-3 '><ion-icon name="logo-github"></ion-icon></li>
                <li className='text-black mr-3'><ion-icon name="logo-linkedin"></ion-icon></li>
                <li className='text-black'><ion-icon name="logo-whatsapp"></ion-icon></li>
            </ul>
           </div>
        </div>
    </div>
  )
}

export default Footer
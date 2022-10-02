import React from 'react'
import logo from '../assets/sparkLogo.png'
import { CgMenu } from 'react-icons/cg'
import { AiOutlineAppstore } from 'react-icons/ai'
import { useState } from 'react'

const Header = () => {

    const [nav, setNav] = useState(false)
    const clickHandle = () => setNav(!nav)

    // const app = document.querySelector('#app')
    // const menu = document.querySelector('#menu')

    // app.addEventListener("click", () => {
    //     menu.classList.toggle('hidden')
    // })


    return (
        <header className='h-[80px] w-full bg-pink relative'>
            <div className=' md:flex md:justify-between md:items-center p-4 max-w-screen-desktop mx-auto'>
                <div className=' w-36 h-8 '>
                    <img src={logo} alt="logo" className='object-cover' />
                </div>
                <ul className="  hidden md:flex md:justify-center md:items-center gap-6 text-base font-normal ">
                    <li className='text-black hover:cursor-pointer '>Features</li>
                    <li className='text-black hover:cursor-pointer'>Publisher Stories</li>
                    <li className='text-black hover:cursor-pointer'>Pricing</li>
                    <li className='text-black hover:cursor-pointer'>Login</li>
                    <button className='bg-blue text-base rounded-md text-bgWhite py-2 px-5 '>Start For Free</button>
                </ul>

            </div>
            <div className=" md:hidden  absolute top-5 right-4 text-black z-20 hover:cursor-pointer">
                <AiOutlineAppstore size={30} onClick={clickHandle} />
            </div>
            <ul className={`${nav ? "md:hidden" : "-translate-y-96"} flex justify-center items-center flex-col bg-white w-full h-80 absolute top-0 left-0 gap-6 text-base font-normal`}>
                <li className='text-black hover:cursor-pointer space-y-4'>Features</li>
                <li className='text-black hover:cursor-pointer'>Publisher Stories</li>
                <li className='text-black hover:cursor-pointer'>Pricing</li>
                <li className='text-black hover:cursor-pointer'>Login</li>
                <button className='bg-blue text-base rounded-md text-bgWhite py-2 px-5 '>Start For Free</button>
            </ul>
        </header>
    )
}

export default Header
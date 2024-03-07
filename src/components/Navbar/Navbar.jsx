import React, { useState } from 'react'
import { Close, Hamburger } from '../../utils/Icons'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className='w-full flex justify-between items-center px-8 bg-white'>
                {/* Logo */}
                <Link to='/'>
                    <img src='https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg' alt='KoinX Logo' />
                </Link>

                <div className='flex sm:gap-4 lg:gap-6 xl:gap-8 justify-center items-center'>
                    {/* Navigation */}
                    <nav className='hidden sm:block'>
                        <ul className='flex sm:gap-2 lg:gap-4 xl:gap-6 font-semibold  text-base'>
                            <li className='cursor-pointer '>Crypto Taxes</li>
                            <li className='cursor-pointer '>Free Tools</li>
                            <li className='cursor-pointer '>Resource Center</li>
                        </ul>
                    </nav>

                    {/* Button */}
                    <button className='sm:block hidden text-white bg-[#0052fe] px-6 py-2 rounded-lg font-semibold  text-base'>Get Started</button>
                    <button onClick={() => setIsOpen((open) => !open)}>
                        {!isOpen ? <Hamburger className='sm:hidden' /> : <Close className='sm:hidden' />}
                    </button>
                </div>
            </div>
            {
                isOpen &&
                <div className={`h-32 sm:hidden w-full bg-white flex items-center justify-center flex-col border-t`}>
                    <ul className='flex flex-col justify-center items-start font-semibold  text-base'>
                        <li className='cursor-pointer '>Crypto Taxes</li>
                        <li className='cursor-pointer '>Free Tools</li>
                        <li className='cursor-pointer '>Resource Center</li>
                    </ul>
                    <button className=' text-white bg-[#0052fe] px-6 py-2 rounded-lg font-semibold  text-base'>Get Started</button>

                </div>
            }

        </>
    )
}

export default Navbar
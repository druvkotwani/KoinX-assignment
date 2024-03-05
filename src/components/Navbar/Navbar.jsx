import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full flex justify-between items-center px-8 bg-white'>
            {/* Logo */}
            <img src='https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg' alt='KoinX Logo' />


            <div className='flex sm:gap-4 lg:gap-6 xl:gap-8 justify-center items-center'>
                {/* Navigation */}
                <nav className='hidden sm:block'>
                    <ul className='flex sm:gap-2 lg:gap-4 xl:gap-6 font-semibold  text-base'>
                        <li>Crypto Taxes</li>
                        <li>Free Tools</li>
                        <li>Resource Center</li>
                    </ul>
                </nav>

                {/* Button */}
                <button className='text-white bg-[#0052fe] px-6 py-2 rounded-lg font-semibold  text-base'>Get Started</button>
            </div>
        </div>
    )
}

export default Navbar
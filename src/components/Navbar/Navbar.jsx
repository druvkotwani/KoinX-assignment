import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full flex justify-between items-center px-12'>
            {/* Logo */}
            <img src='https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg' alt='KoinX Logo' />


            <div className='flex gap-4'>
                {/* Navigation */}
                <nav>
                    <ul className='flex '>
                        <li>Crypto Taxes</li>
                        <li>Free Tools</li>
                        <li>Resource Center</li>
                    </ul>
                </nav>

                {/* Button */}
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default Navbar
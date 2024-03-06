import React from 'react'
import { RightArrow } from '../../utils/Icons'

const GetStarted = () => {
    return (
        <div className="bg-[#0052fe] rounded-2xl font-sans  text-white flex items-center justify-center flex-col p-4 my-6">
            <img alt="calculator-asset" loading="lazy" width="150" height="127" className="mt-2" src="https://www.koinx.com/_next/static/media/CryptoGuide.555c0e7d.svg" />
            <h3 className="font-semibold text-xl mt-3">Get Started with KoinX for FREE</h3>

            <p className="text-sm text-center mt-4 mb-2 text-[#f2f2f2]  ">
                With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
            </p>
            <a href="https://app.koinx.com?r=koinx_website" target="_blank" rel="noreferrer" className='my-3 '>
                <button className="bg-white text-black px-6 py-3 rounded-lg text-sm  font-[550] flex gap-1 justify-center items-center">
                    <span> Get Started for FREE</span>
                    <RightArrow />
                </button>
            </a>
        </div>
    )
}

export default GetStarted
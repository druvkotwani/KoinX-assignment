import React from 'react'
import { BitcoinLogo } from '../../../utils/Icons'
import TradingViewWidget from '../Chart/TradingViewWidget'

function CoinsDetail() {
    return (
        <div className=' w-full m-4 '>

            <div className='sm:bg-white flex gap-2 justify-start items-center mb-4'>
                <BitcoinLogo width={30} height={30} />

                {/* Name and Short */}
                <div className='flex justify-center items-center gap-2 '>
                    <p className='font-semibold text-xl '>Bitcoin</p>
                    <span className='text-sm font-semibold  text-[#5d667b] '>BTC</span>
                </div>
                {/* Rank */}
                <span className='text-sm p-2 rounded-md  text-white bg-[#768396]'>Rank #1</span>
            </div>

            {/*    Price */}
            <div className='bg-white rounded-md px-4'>
                <div className='flex flex-col justify-center items-start gap-2 py-4 border-b '>
                    <div className='flex justify-start items-center gap-8'>
                        <p className='font-semibold text-2xl '>$46,953.04</p>

                        <div className='flex justify-center items-center gap-2'>
                            <span className='text-sm  px-2 py-1 font-semibold bg-[#eaf8f4]  text-[#15b179] rounded-md '>+ 2.51%</span>
                            <span className='text-xs font-semibold  text-[#5d667b] '>(24H)</span>
                        </div>
                    </div>
                    <p className='text-sm'>₹ 39,42,343</p>
                </div>
                <div className='mt-4'>
                    <TradingViewWidget />
                </div>
            </div>
        </div>
    )
}

export default CoinsDetail
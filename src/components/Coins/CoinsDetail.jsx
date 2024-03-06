import React from 'react'
import { BitcoinLogo } from '../../utils/Icons'
import TradingViewWidget from '../Chart/TradingViewWidget'

function CoinsDetail() {
    return (
        <div className='sm:bg-white w-full'>

            <div className=' sm:bg-white  flex gap-2 justify-start items-center mb-4'>
                <BitcoinLogo width={30} height={30} />

                {/* Name and Short */}
                <div className='flex justify-center items-center gap-2  '>
                    <p className='font-semibold text-xl '>Bitcoin</p>
                    <span className='text-sm font-semibold  text-[#5d667b] '>BTC</span>
                </div>
                {/* Rank */}
                <span className='text-sm px-2 py-1 rounded-[4px] ml-4 text-white bg-[#768396]'>Rank #1</span>
            </div>

            {/*    Price */}
            <div className=' bg-white rounded-md border px-4   '>
                <div className='flex flex-col justify-center items-start gap-2 py-4 border-b '>
                    <div className='flex justify-start items-center gap-8 mt-2'>
                        <p className='font-[540] text-3xl '>$46,953.04</p>

                        <div className='flex justify-center items-center gap-2 ml-2'>
                            <span className='text-sm  px-2 py-1 font-medium bg-[#eaf8f4]  text-[#15b179] rounded-md '>▲ 2.51%</span>
                            <span className='text-sm font-[540]  text-[#5d667b] '>(24H)</span>
                        </div>
                    </div>
                    <p className='text-sm font-medium'>₹ 39,42,343</p>
                </div>

                <div className='mt-4   '>
                    <TradingViewWidget />
                </div>
            </div>
        </div>
    )
}

export default CoinsDetail
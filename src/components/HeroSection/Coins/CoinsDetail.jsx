import React from 'react'
import { BitcoinLogo } from '../../../utils/Icons'
import TradingViewWidget from '../Chart/TradingViewWidget'

function CoinsDetail() {
    return (
        <div className='bg-white w-full '>

            <div className='flex gap-2 justify-center items-center'>
                <BitcoinLogo width={24} height={24} />

                {/* Name and Short */}
                <div className='flex justify-center items-center gap-2'>
                    <p className='font-semibold text-base '>Bitcoin</p>
                    <span className='text-xs font-semibold  text-[#5d667b] '>BTC</span>
                </div>
                {/* Rank */}
                <span className='text-xs p-2 rounded-md text-white bg-[#768396]'>Rank #1</span>
            </div>

            <TradingViewWidget />
        </div>
    )
}

export default CoinsDetail
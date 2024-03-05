import React from 'react'
import TrendingCoins from './Trending/TrendingCoins'
import CoinsDetail from './Coins/CoinsDetail'

const Hero = () => {
    return (
        <>
            <p className='p-2'>Cryptocurrencies {">>"} Bitcoin</p>
            <div className='flex'>

                <CoinsDetail />
                {/* <TrendingCoins /> */}
            </div>
        </>
    )
}

export default Hero
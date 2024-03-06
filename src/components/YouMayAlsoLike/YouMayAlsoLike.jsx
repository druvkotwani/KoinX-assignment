import React, { useEffect } from 'react'

const YouMayAlsoLike = ({ trendingCoins }) => {

    return (
        <div>
            <h1 className='font-bold text-xl pt-4'>You May Also Like</h1>

            <div className='flex-wrap flex mt-2'>

                {
                    trendingCoins.map((coin, index) => {
                        return (
                            <div key={index} className='border flex gap-1 flex-col justify-center items-start p-2 rounded-md'>
                                <div className='flex justify-center items-center'>
                                    <img src={coin.item.large} alt="trending-coin" className='w-4 h-4' />
                                    <p className='text-xs ml-1'>{coin.item.symbol}</p>
                                    <span className='text-[8px] p-[2px] bg-[#eaf8f4]  text-[#15b179] rounded-sm ml-[2px] '>+ 2.51%</span>
                                </div>
                                <p className='text-xs text-start font-semibold'>$45,332.83</p>
                                <img src='https://www.coingecko.com/coins/19059/sparkline.svg' alt="sparkline" className='w-24 h-8 mx-3' />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default YouMayAlsoLike
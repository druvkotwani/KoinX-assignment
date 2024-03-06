import React, { useEffect, useState } from 'react'

const TrendingCoins = () => {
    const [trendingCoins, setTrendingCoins] = useState([])
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/search/trending')
            .then(response => response.json())
            .then(data => {
                setTrendingCoins(data.coins)
                console.log(data.coins)
            })
    }, [])
    return (
        <div className='bg-white px-4 rounded-md '>
            <h1 className='font-semibold text-xl '>Trending Coins {`(24H)`}</h1>

            <ul>
                {
                    trendingCoins.map((coin, index) => {
                        return (
                            <li key={index} className='flex justify-between items-center gap-4 mt-4  '>
                                <div className='flex justify-center items-center gap-1'>
                                    <img src={coin.item.small} alt={coin.item.name} className='w-6 h-6' />
                                    <span className='font-medium '>{coin.item.name}</span>
                                </div>
                                <span className='text-sm  px-2 py-1 font-meid bg-[#eaf8f4]  text-[#15b179] rounded-md '>{(coin.item.data.price_change_percentage_24h.usd).toFixed(2)}</span>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default TrendingCoins
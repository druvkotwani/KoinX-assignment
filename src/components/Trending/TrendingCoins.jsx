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
        <div className='bg-white px-4 rounded-md'>
            <h1 className='font-semibold text-2xl pt-4   '>Trending Coins {`(24h)`}</h1>

            <ul>
                {
                    trendingCoins.slice(0, 3).map((coin, index) => {
                        return (
                            <li key={index} className='flex justify-between items-center gap-4 mt-4  '>
                                <div className='flex justify-center items-center gap-1'>
                                    <img src={coin.item.small} alt={coin.item.name} className='w-6 h-6' />
                                    <span className='font-medium '>{coin.item.name}</span>
                                    <span>{`(${coin.item.symbol})`}</span>
                                </div>
                                <span className={`text-sm  px-2 py-1 font-meid  ${coin.item.data.price_change_percentage_24h.usd > 0 ? `text-[#15b179] bg-[#eaf8f4]` : `text-[red] bg-[#fdeae9]`}
  rounded-md`}>
                                    {coin.item.data.price_change_percentage_24h.usd > 0 ? `▲${coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%` : `▼${coin.item.data.price_change_percentage_24h.usd.toFixed(2) * -1}%`}
                                </span>
                            </li>
                        )
                    })
                }

            </ul>
        </div >
    )
}

export default TrendingCoins
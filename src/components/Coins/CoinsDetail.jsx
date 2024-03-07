import React, { useEffect, useState } from 'react'
import { BitcoinLogo, Doge, Ethereum } from '../../utils/Icons'
import TradingViewWidget from '../Chart/TradingViewWidget'
import { useParams } from 'react-router-dom'
function CoinsDetail() {
    const { coinName } = useParams();
    const [price, setPrice] = useState(46953.04);
    const [change, setChange] = useState(2.51);
    const [priceInr, setPriceInr] = useState(46953.04 * 74.5)

    useEffect(() => {
        const lowerCaseCoinName = coinName.toLowerCase();

        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${lowerCaseCoinName}&vs_currencies=inr%2Cusd&include_24hr_change=true`)
            .then(response => response.json())
            .then(data => {
                setPrice(data[lowerCaseCoinName].usd)
                setChange(data[lowerCaseCoinName].usd_24h_change)
                setPriceInr(data[lowerCaseCoinName].inr)

            })
    }, [])
    return (
        <div className='md:bg-white md:rounded-lg '>

            <div className='  md:bg-white md:rounded-lg  flex gap-2 justify-start items-center mb-4 sm:mb-0 sm:p-4 '>
                {coinName === 'Bitcoin' && <BitcoinLogo width={30} height={30} />}
                {coinName === 'Ethereum' && <Ethereum width={30} height={30} />}
                {coinName === 'Dogecoin' && <Doge width={30} height={30} />}



                {/* Name and Short */}
                <div className='flex justify-center items-center gap-2  sm:mr-2'>
                    <p className='font-semibold text-xl '>{coinName}</p>
                    <span className='text-sm font-semibold  text-[#5d667b] '>
                        {coinName === 'Bitcoin' && "BTC"}
                        {coinName === 'Ethereum' && "ETC"}
                        {coinName === 'Dogecoin' && "DOGE"}
                    </span>
                </div>
                {/* Rank */}
                <span className='text-sm px-2 py-1 rounded sm:rounded-md  ml-4 sm:ml-8 sm:py-[6px] text-white bg-[#768396]'>Rank
                    {coinName === 'Bitcoin' && " #1"}
                    {coinName === 'Ethereum' && " #2"}
                    {coinName === 'Dogecoin' && " #3"}
                </span>
            </div>

            {/*    Price */}
            <div className=' bg-white rounded-lg sm:border-none border px-4 md:h-[580px] h-[500px]    '>
                <div className='flex flex-col justify-center items-start gap-2 py-4 sm:pt-0 border-b '>
                    <div className='flex justify-start items-center gap-8 mt-2'>
                        <p className='font-[540] text-3xl '>${price.toLocaleString()}</p>

                        <div className='flex justify-center items-center gap-2 ml-2'>

                            <span className={`text-sm  px-2 py-1 font-medium   ${change > 0 ? `text-[#15b179] bg-[#eaf8f4]` : `text-[red] bg-[#fdeae9]`} rounded-md`}>
                                {change > 0 ? `▲ ${change.toFixed(2)}%` : `▼ ${change.toFixed(2) * -1}%`}
                            </span>
                            <span className='text-sm font-[540]  text-[#5d667b] '>(24H)</span>
                        </div>
                    </div>
                    <p className='text-sm font-medium'>₹ {priceInr.toLocaleString()}</p>
                </div>

                <div className='mt-4   md:h-[400px] h-[300px]'>
                    <TradingViewWidget />
                </div>
            </div>
        </div>
    )
}

export default CoinsDetail
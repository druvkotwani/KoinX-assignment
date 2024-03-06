import React from 'react'
import { InfoIcon } from '../../utils/Icons'

const Fundamentals = () => {
    return (
        <div className='bg-white my-2 rounded-md font-sans' >
            <div className='flex items-center justify-start  '>
                <h1 className='font-semibold text-xl pl-4 pr-2 text-[#44465a]'>Fundamentals</h1>
                <InfoIcon className='mt-1' />
            </div>
            <ul className='px-4 text-sm font-sans font-[550]'>
                <li className='flex justify-between items-center gap-4 mt-3 border-b pb-2'>
                    <span className='text-[#778296]  '>Bitcoin Price</span>
                    <span className=''>$16,815.46</span>
                </li>
                <li className='flex justify-between items-center gap-4 mt-3 border-b pb-2'>
                    <span className='text-[#778296]   '>24h Low / 24h High</span>
                    <span className=''>$16,382.46 / $16,874.12</span>
                </li>
                <li className='flex justify-between items-center gap-4 mt-3 border-b pb-2'>
                    <span className='text-[#778296]   '>7d Low / 7d High</span>
                    <span className=''>$16,382.46 / $16,874.12</span>
                </li>


                <li className='flex justify-between items-center gap-4 mt-3 border-b pb-2'>
                    <span className='text-[#778296]'>Market Cap Rank</span>
                </li>
                <li className='flex justify-between items-center gap-4 mt-3 border-b pb-2'>
                    <span className='text-[#778296]'>Market Cap</span>
                    <span className=''> $323,507,290,047</span>
                </li>
                <li className='flex justify-between items-center gap-4 mt-3 border-b pb-2'>
                    <span className='text-[#778296]'>Market Cap Dominance</span>
                    <span className=''> 38.343%</span>
                </li>
                <li className='flex justify-between items-center gap-4 mt-3 border-b pb-2'>
                    <span className='text-[#778296]'>Volume / Market Cap</span>
                    <span className=''>0.0718</span>
                </li>

                <li className='flex justify-between items-center gap-4 mt-3 border-b pb-2'>
                    <span className='text-[#778296] '>All-Time High</span>

                    <div>

                        <div className='flex gap-1 justify-end'>
                            <span className=''>$64,000</span>
                            <span className='text-[red] '>-75.6%</span>
                        </div>
                        <span className='text-xs font-normal'> Nov 10, 2021 {`(about 1 year)`}</span>
                    </div>


                </li>
                <li className='flex justify-between items-center gap-4 mt-3 border-b pb-2'>
                    <span className='text-[#778296]'>All-Time Low</span>

                    <div>

                        <div className='flex gap-1 justify-end'>
                            <span className=''>$67.81</span>
                            <span className='text-[green] '>24729.1%</span>
                        </div>
                        <span className='text-xs font-normal '> July 06, 2014 {`(about 9 year)`}</span>
                    </div>
                </li>



            </ul>

        </div>
    )
}

export default Fundamentals
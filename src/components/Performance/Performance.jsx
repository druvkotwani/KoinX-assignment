import React from 'react'
import Fundamentals from '../Fundamentals/Fundamentals'

const Performance = () => {
    return (
        <div className='bg-white my-2 font-sans rounded-md'>
            <div className=' my-2 rounded-md'>
                <h1 className='font-semibold text-2xl pl-4 pr-2'>Performance</h1>
            </div>

            <div className='flex justify-between gap-2 items-center px-4 text-[#44465a]'>
                <div className='flex flex-col justify-center items-start '>
                    <p>Today's Low</p>
                    <p className='font-semibold'>46,930.22</p>
                </div>
                <div className='bg-gradient-to-r from-[#ff4b41] via-[#ff5f37] to-[#57DE4C] h-[6px] w-28 rounded-md  '></div>
                <div className='flex flex-col justify-center items-end '>
                    <p>Today's High</p>
                    <p className='font-semibold'>49,343.83</p>
                </div>
            </div>

            <div className='flex justify-between gap-2 items-center px-4 text-[#44465a]'>
                <div className='flex flex-col justify-center items-start '>
                    <p>52W Low</p>
                    <p className='font-semibold'>16,930.22</p>
                </div>
                <div className='bg-gradient-to-r from-[#ff4b41] via-[#ff5f37] to-[#57DE4C] h-[6px] w-28 rounded-md  '></div>

                <div className='text-sm flex flex-col justify-center items-end  '>
                    <p>52W High</p>
                    <p className='font-semibold'>47,743.83</p>
                </div>
            </div>
            <Fundamentals />
        </div>
    )
}

export default Performance
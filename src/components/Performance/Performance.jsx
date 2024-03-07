import React from 'react'
import Fundamentals from '../Fundamentals/Fundamentals'

const Performance = () => {
    return (
        <div className='bg-white  font-sans rounded-lg py-2 lg:px-2'>
            <div className=' my-2 rounded-md'>
                <h1 className='font-semibold text-2xl lg:text-3xl pl-2 pr-2'>Performance</h1>
            </div>

            <div className='flex justify-between gap-1 items-center px-2 text-[#44465a] my-4'>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <p className='lg:text-base'>Today's Low</p>
                    <p className='font-semibold lg:text-lg'>46,930.22</p>
                </div>

                <div className='bg-gradient-to-r from-[#ff4b41] via-[#ff5f37] to-[#57DE4C] h-[6px] md:w-4/6 w-[40%]  flex flex-col rounded-md  '>
                    <span className='ml-[70%]'>▲</span>
                    <span className='md:ml-[65%] ml-[53%]'>$48,637.83</span>
                </div>
                <div className='flex flex-col justify-center items-end gap-2'>
                    <p className='lg:text-base'>Today's High</p>
                    <p className='font-semibold lg:text-lg'>49,343.83</p>
                </div>
            </div>

            <div className='flex justify-between gap-1 items-center px-2 text-[#44465a] my-4'>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <p className='lg:text-base'>52W Low</p>
                    <p className='font-semibold lg:text-lg'>16,930.22</p>
                </div>
                <div className='bg-gradient-to-r from-[#ff4b41] via-[#ff5f37] to-[#57DE4C] h-[6px] md:w-4/6 w-[40%] rounded-md  '></div>

                <div className='text-sm flex flex-col justify-center items-end gap-2 '>
                    <p className='lg:text-base'>52W High</p>
                    <p className='font-semibold lg:text-lg'>47,743.83</p>
                </div>
            </div>
            <Fundamentals />
        </div>
    )
}

export default Performance
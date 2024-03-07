import React from 'react'
import { InfoIcon } from '../../utils/Icons'

const AnalystEstimates = () => {
    return (
        <div className=' my-2 lg:my-4'>
            <div className='flex items-center justify-start gap-1 '>
                <h1 className='font-semibold text-xl pl-2 text-[#44465a] lg:text-2xl'>Analyst Estimates</h1>
                <InfoIcon />
            </div>

            <div className='flex justify-between lg:justify-start lg:gap-4 items-center mt-2 px-2'>
                <div className='bg-[#e8f8f4] w-32 h-32 rounded-full flex justify-center items-center text-[#15b179]'>
                    <span className='text-4xl '>76</span>
                    <span className='text-xl'>%</span>
                </div>

                <div className='text-[#737d8d] flex flex-col gap-4 '>

                    <div className='flex justify-start items-center  gap-2'>
                        <p className='w-8 '>Buy</p>
                        <div className='flex justify-center items-center gap-2 '>
                            <div className='bg-[#15b179] w-28 h-[10px] lg:w-96   rounded-sm   text-[#15b179]'></div>
                            <span>76%</span>
                        </div>
                    </div>
                    <div className='flex justify-start items-center  gap-2'>
                        <p className='w-8 '>Hold</p>
                        <div className='flex justify-center items-center gap-2 '>
                            <div className='bg-[#c7c9cf] w-8 h-[10px] lg:w-28  rounded-sm   '></div>
                            <span>8%</span>
                        </div>
                    </div>

                    <div className='flex justify-start items-center  gap-2'>
                        <p className='w-8 '>Sell</p>
                        <div className='flex justify-center items-center gap-2 '>
                            <div className='bg-[red] w-12 h-[10px]  rounded-sm  lg:w-40  '></div>
                            <span>16%</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AnalystEstimates
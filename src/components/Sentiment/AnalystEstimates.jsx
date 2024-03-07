import React from 'react'
import { InfoIcon } from '../../utils/Icons'

const AnalystEstimates = () => {
    return (
        <div className=' my-2 lg:my-4'>
            <div className='flex items-center justify-start gap-1 '>
                <h1 className='font-semibold text-xl pl-2 text-[#44465a] lg:text-2xl'>Analyst Estimates</h1>
                <InfoIcon />
            </div>

            <div className='flex justify-normal   md:justify-start gap-4 md:gap-12 items-center mt-2 px-2 '>
                <div>
                    <div className='bg-[#e8f8f4] w-32 h-32 rounded-full flex justify-center items-center text-[#15b179]'>
                        <span className='text-4xl '>76</span>
                        <span className='text-xl'>%</span>
                    </div>
                </div>

                {/* Lines */}
                <div className='text-[#737d8d] flex flex-col gap-4 w-full'>

                    <div className='flex justify-start items-center  gap-2'>
                        <p className='w-8 '>Buy</p>
                        <div className='flex justify-start items-center gap-2 w-full'>
                            <div className='bg-[#15b179] w-[70%] h-[10px]    rounded-sm   text-[#15b179]'></div>
                            <span>76%</span>
                        </div>
                    </div>
                    <div className='flex justify-start items-center  gap-2 '>
                        <p className='w-8 '>Hold</p>
                        <div className='flex justify-start items-center gap-2 w-full'>
                            <div className='bg-[#c7c9cf] h-[10px] w-[9%] rounded-sm   '></div>
                            <span>8%</span>
                        </div>
                    </div>

                    <div className='flex justify-start items-center  gap-2'>
                        <p className='w-8 '>Sell</p>
                        <div className='flex justify-start items-center gap-2 w-full '>
                            <div className='bg-[red] w-[18%] h-[10px]  rounded-sm  '></div>
                            <span>16%</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AnalystEstimates
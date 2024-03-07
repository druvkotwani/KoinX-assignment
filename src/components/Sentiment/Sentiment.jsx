import React from 'react'
import Fundamentals from '../Fundamentals/Fundamentals'
import KeyEvents from './KeyEvents/KeyEvents'
import AnalystEstimates from './AnalystEstimates'

const Sentiment = () => {
    return (
        <div className='bg-white rounded-lg py-2'>
            <h1 className='font-bold text-2xl pt-2 px-2'>Sentiment</h1>
            <div className='flex flex-col gap-4 mt-2'>
                {/* <KeyEvents /> */}
                <AnalystEstimates />
                <Fundamentals />
            </div>
        </div>
    )
}

export default Sentiment
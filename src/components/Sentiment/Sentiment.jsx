import React from 'react'
import Fundamentals from '../Fundamentals/Fundamentals'
import KeyEvents from './KeyEvents/KeyEvents'

const Sentiment = () => {
    return (
        <div className='bg-white rounded-md'>
            <h1 className='font-bold text-2xl pt-2 px-4'>Sentiment</h1>
            <KeyEvents />
            <Fundamentals />
        </div>
    )
}

export default Sentiment
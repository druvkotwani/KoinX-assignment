import React from 'react'
import { RightArrow } from '../../utils/Icons'

const About = () => {
    return (
        <div className=" bg-white rounded-lg px-2 font-sans pb-2 lg:px-4">
            <h1 className='font-semibold text-2xl pt-4 '>About Bitcoin</h1>

            <h2 className='font-semibold text-lg pt-4 lg:text-xl'>What is Bitcoin?</h2>
            <p className=' text-base pt-2 lg:border-b lg:pb-2'>Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.</p>

            <h2 className='font-semibold text-lg pt-4 lg:pt-2 lg:text-xl'>Who created Bitcoin?</h2>
            <p className='text-base pt-2'>Bitcoin was invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009 when its implementation was released as open-source software.</p>
            <p className='text-base pt-2'>Bitcoin is a type of virtual currency that is free from government interference and can be shared instantly online. The bitcoin system is a collection of computers (also referred to as "nodes" or "miners") that all run bitcoin's code and store its blockchain. Metaphorically, a blockchain can be thought of as a collection of blocks. In each block is a collection of transactions. Because all the computers running the blockchain have the same list of blocks and transactions, and can transparently see these new blocks being filled with new bitcoin transactions, no one can cheat the system.</p>
            <p className='text-base pt-2 lg:border-b lg:pb-2'>Conventional currencies are based on gold or silver. Theoretically, you knew that if you handed over a dollar at the bank, you could get some gold back (although this didn’t actually work in practice). But bitcoin isn’t based on gold; it’s based on mathematics.</p>

            <h2 className='font-semibold text-lg pt-4 lg:text-xl'>Alread holding Crypto?</h2>

            <div className='sm:flex md:block lg:flex justify-start  gap-2 items-center sm:border-b '>
                <div className=' bg-gradient-to-br from-teal-400 text-white to-sky-800 btn rounded-md flex py-3 justify-between items-center gap-2 my-3 px-3'>
                    <img src="https://susteam.at/static/pictures/use-cases3.png" alt="holding-crypto" className='w-32   mr-2    h-28 rounded-lg' />

                    <div className='flex flex-col justify-center items-start gap-2 ml-2'>
                        <p className='text-xl font-semibold'>Calculate your profits</p>
                        <button className="bg-white text-black px-3 py-1 rounded-md text-sm  font-[550] flex gap-1 justify-center items-center">
                            <span> Check Now</span>
                            <RightArrow width={18} height={9} />
                        </button>
                    </div>
                </div>

                <div className=' bg-gradient-to-br from-orange-400 text-white to-red-500 btn rounded-md flex py-3 justify-between items-center gap-2 my-3 px-3'>
                    <img src="https://api.ardmediathek.de/image-service/images/urn:ard:image:bdd80eb7b0e2080a?w=448&ch=17fdc30025937c72" alt="holding-crypto" className='w-32   mr-2    h-28 rounded-lg' />

                    <div className='flex flex-col justify-center items-start gap-2 ml-2'>
                        <p className='text-xl font-semibold'>Calculate your tax liabilty</p>
                        <button className="bg-white text-black px-3 py-1 rounded-md text-sm  font-[550] flex gap-1 justify-center items-center">
                            <span> Check Now</span>
                            <RightArrow width={18} height={9} />
                        </button>
                    </div>
                </div>
            </div>

            <p className='py-2 pb-4 hidden sm:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed obcaecati modi deleniti quasi! Ipsum doloremque, accusamus nisi rem, eligendi provident facere officiis voluptatibus quos similique dolorum magnam et molestias fuga.</p>
        </div>

    )
}

export default About
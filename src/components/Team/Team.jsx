import React from 'react'
import YouMayAlsoLike from '../YouMayAlsoLike/YouMayAlsoLike'

const persons = [
    {
        name: 'John Smith',
        designation: 'Designation here',
        image: 'https://randomuser.me/api/portraits/men/20.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ipsa tempore quae unde expedita veritatis nam dolores deleniti dolorem dicta porro quod, quaerat sequi in ad! Solu ipsum dolor sit amet consectetur, ta quos amet molestiae.'
    },
    {
        name: 'John Doe',
        designation: 'CTO',
        image: 'https://randomuser.me/api/portraits/men/21.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ipsum dolor sit amet consecipsum dolor sit amet consectetur, adipisicing elit. Quo ipsa tempore quae unde expedipsum dolor sit amet consectetur, adipisicing elit. Quo ipsa tempore quae unde expedtetur,  Quo ipQuo ipsa tempore a tempore quae unde expedita veritatis nam dolores deleniti dolorem dicta porro quod, quaerat sequi in ad! Soluta quos amet molestiae.'
    },
    {
        name: 'Jane Doe',
        designation: 'CFO',
        image: 'https://randomuser.me/api/portraits/women/88.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ipsa tempore quae unde expedipsum dolor sit amet consectetur, adipisicing elit. Quo ipsa tempore quae unde expedita veritatis nam dolores deleniti dolorem dicta porro quod, quaerat sequ ipsum dolor sit amet consectetur, i in ad! Soluta quos amet molestiae.'
    },
]

const Team = ({ trendingCoins }) => {
    return (
        <div className='bg-white rounded-lg px-2 font-sans pb-2 sm:px-4 '>
            <h1 className='font-bold text-2xl pt-4 '>Team</h1>
            <p className=' text-[16px] pt-2 mb-2'>
                Lorem ipsum dolor sit amet consectetur. Id adipisicing elit. Eum autem voluptatem tempore nesciunt aliquam dolore excepturi modi minima mollitia ad quaerat consequuntur dignissimos.
            </p>

            {
                persons.map((person, index) => {
                    return (
                        <div key={index} className='bg-[#e8f5fc] flex items-center justify-center sm:flex-row sm:gap-6   flex-col px-2 py-3 rounded-lg my-6 lg:px-6'>
                            <div className=' sm:flex flex-col  justify-center items-center '>
                                <img src={person.image} alt="team" className='w-24 text-center max-w-fit   h-24 rounded-md' />
                                <h1 className='font-semibold text-center'>{person.name}</h1>
                                <p className='text-xs  text-[#5d667b] text-center '>{person.designation}</p>
                            </div>
                            <p className='my-2 text-[15px]      '>{person.description}</p>
                        </div>
                    )
                })
            }
            <YouMayAlsoLike trendingCoins={trendingCoins} />
            <YouMayAlsoLike trendingCoins={trendingCoins} />
        </div>

    )
}

export default Team
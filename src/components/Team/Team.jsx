import React from 'react'

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
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ipsum dolor sit amet consectetur,  Quo ipQuo ipsa tempore a tempore quae unde expedita veritatis nam dolores deleniti dolorem dicta porro quod, quaerat sequi in ad! Soluta quos amet molestiae.'
    },
    {
        name: 'Jane Doe',
        designation: 'CFO',
        image: 'https://randomuser.me/api/portraits/women/88.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ipsa tempore quae unde expedita veritatis nam dolores deleniti dolorem dicta porro quod, quaerat sequ ipsum dolor sit amet consectetur, i in ad! Soluta quos amet molestiae.'
    },
]

const Team = () => {
    return (
        <div className='bg-white rounded-md px-2 font-sans pb-2 '>
            <h1 className='font-bold text-2xl pt-4 '>Team</h1>
            <p className=' text-md pt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum autem voluptatem tempore nesciunt aliquam dolore excepturi modi minima mollitia ad quaerat consequuntur dignissimos.
            </p>

            {
                persons.map((person, index) => {
                    return (
                        <div key={index} className='bg-[#e8f5fc] flex items-center justify-center flex-col px-2 py-3 rounded-lg my-6'>
                            <img src={person.image} alt="team" className='w-24  h-24 rounded-md' />
                            <h1 className='font-semibold'>{person.name}</h1>
                            <p className='text-xs text-[#5d667b] '>{person.designation}</p>
                            <p className='my-2 text-[15px]  '>{person.description}</p>
                        </div>
                    )
                })
            }

        </div>

    )
}

export default Team
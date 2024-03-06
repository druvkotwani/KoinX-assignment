import React from 'react'
import { InfoIcon } from '../../../utils/Icons'
import Slider from "react-slick";
import '../../../App.css'
const items = [
    {
        heading: 'Loerem psum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incid Ipsum',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: 'https://randomuser.me/api/portraits/men/20.jpg',
        color: 'bg-[#e8f5fc]'
    },
    {
        heading: 'Loerem Ipsum psum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incid',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: 'https://randomuser.me/api/portraits/men/20.jpg',
        color: 'bg-[#e8f8f4]',
    },
    {
        heading: 'Loere psum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incidm Ipsum',
        content: 'Lorem ippsum dolor sit amet, elit. Sed do eiusmod tempor incid or incididunt ut labore et dolore magna aliqua.',
        icon: 'https://randomuser.me/api/portraits/men/21.jpg',
        color: 'bg-[#e8f5fc]'
    }
]

const KeyEvents = () => {
    const settings = {
        focusOnSelect: true,
        infinite: true,
        autoScroll: true,
        slidesToShow: 1,
        arrows: false,
        initialSlide: 0,
        slideToScroll: 1,
        speed: 500,
    };
    return (
        <div className=''>
            <div className='flex items-center justify-start gap-1 px-2'>
                <h1 className='font-semibold text-xl  text-[#44465a]'>Key Events</h1>
                <InfoIcon />
            </div>

            <Slider {...settings} className='mt-2 mx-1' >
                {
                    items.map((item, index) => {
                        return (
                            <div key={index} className={`rounded-md px-2 py-3 flex gap-2 ${item.color}`}>
                                <img src={item.icon} alt='icon' className='w-8 h-8 rounded-full' />
                                <div className='flex flex-col'>
                                    <h1 className='text-sm font-semibold'>{item.heading}</h1>
                                    <p className='text-xs'>{item.content}</p>
                                </div>
                            </div>

                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default KeyEvents
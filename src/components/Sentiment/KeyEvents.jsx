import React from 'react'
import { GoIcon, InfoIcon, NewsIcon } from '../../utils/Icons'
import Slider from "react-slick";
import '../../App.css'
import { SampleNextArrow, SamplePrevArrow } from '../YouMayAlsoLike/YouMayAlsoLike';
const items = [
    {
        heading: 'Loerem psum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incid Ipsum',
        content: 'Lorem ippsum dolor sit amet, elit. Sed do eiusmod elit. Sed do eiusmod elit. Sed do eiusmod tempolor sit amet, consect. Sed do eiusmod elit. Slor sit amet, consect. Sed do eiusmod elit. Sr incid or incididunt ut labore et dolore magna aliqua.',
        color: 'bg-[#e8f5fc]'
    },
    {
        heading: 'Loerem Ipsum psum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incid',
        content: 'Lorem ippsum dolor sit amet, elit. Sed do eiusmod elit. Sed do eiusmod elit. Sed do eiusmod tempolor sit amet, consect. Sed do eiusmod elit. Slor sit amet, consect. Sed do eiusmod elit. Sr incid or incididunt ut labore et dolore magna aliqua.',
        color: 'bg-[#e8f8f4]',
    },
    {
        heading: 'Loere psum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incidm Ipsum',
        content: 'Lorem ippsum dolor sit amet, elit. Sed do eiusmod elit. Sed do eiusmod elit. Sed do eiusmod tempolor sit amet, consect. Sed do eiusmod elit. Slor sit amet, consect. Sed do eiusmod elit. Sr incid or incididunt ut labore et dolore magna aliqua.',
        color: 'bg-[#e8f5fc]'
    },
    {
        heading: 'Loere psum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incidm Ipsum',
        content: 'Lorem ippsum dolor sit amet, elit. Sed do eiusmod elit. Sed do eiusmod elit. Sed do eiusmod tempolor sit amet, consect. Sed do eiusmod elit. Slor sit amet, consect. Sed do eiusmod elit. Sr incid or incididunt ut labore et dolore magna aliqua.',
        color: 'bg-[#e8f8f4]'
    },
    {
        heading: 'Loere psum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incidm Ipsum',
        content: 'Lorem ippsum dolor sit amet, elit. Sed do eiusmod elit. Sed do eiusmod elit. Sed do eiusmod tempolor sit amet, consect. Sed do eiusmod elit. Slor sit amet, consect. Sed do eiusmod elit. Sr incid or incididunt ut labore et dolore magna aliqua.',

        color: 'bg-[#e8f5fc]'
    }
]

const KeyEvents = () => {
    const settings = {
        focusOnSelect: true,

        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 792,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ],
        speed: 500,
        nextArrow: <SampleNextArrow className='' />,
        prevArrow: <SamplePrevArrow className='' />,
    };
    return (
        <div className=''>
            <div className='flex items-center justify-start gap-1 px-2'>
                <h1 className='font-semibold text-xl  text-[#44465a]'>Key Events</h1>
                <InfoIcon />
            </div>

            <div className='slider-container '>
                <Slider {...settings} className='mt-2 mx-1' >
                    {
                        items.map((item, index) => {
                            return (
                                <div key={index} className={`cursor-grab rounded-md px-3 py-6  justify-center items-start   flex gap-6 ${item.color}`}>
                                    {
                                        index % 2 == 0 ? (
                                            <div className="bg-[#0082FF] p-3 w-12 h-12 rounded-full justify-center flex items-center">
                                                <NewsIcon />
                                            </div>
                                        ) : (
                                            <div className="bg-[#0FBA83] p-3 w-12 h-12 rounded-full justify-center flex items-center">
                                                <GoIcon />
                                            </div>
                                        )
                                    }

                                    <div className='flex flex-col gap-2'>
                                        <h1 className='text-sm md:text-base font-semibold'>{item.heading}</h1>
                                        <p className='text-xs md:text-sm'>{item.content}</p>
                                    </div>
                                </div>

                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default KeyEvents
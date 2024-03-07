import React, { useEffect } from 'react'

import Slider from "react-slick";

const YouMayAlsoLike = ({ trendingCoins }) => {
    const settings = {
        focusOnSelect: true,

        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ],
        speed: 500,
        nextArrow: <SampleNextArrow className='' />,
        prevArrow: <SamplePrevArrow className='' />,

    };
    return (
        <div className='mb-2'>
            <h1 className='font-bold text-xl pt-2'>You May Also Like</h1>

            <div className='slider-container mt-2'>
                <Slider {...settings} className='  ' >
                    {
                        trendingCoins.map((coin, index) => {
                            return (
                                coin.item.data.price.length < 10 &&
                                (
                                    <div key={index} className='border flex gap-2 flex-col justify-center items-start p-2 rounded-md bg-[#fefefe] '>
                                        <div className='flex justify-start items-center'>
                                            <img src={coin.item.large} alt="trending-coin" className='w-4 h-4 lg:w-6 lg:h-6' />
                                            <p className='text-xs ml-1 lg:text-sm'>{coin.item.symbol}</p>
                                            <span className='text-[8px] p-[2px] lg:text-[10px] bg-[#eaf8f4]  text-[#15b179] rounded-sm ml-[2px] '>+ 2.51%</span>
                                        </div>
                                        <p className='text-xs lg:text-sm text-start font-semibold'>{coin.item.data.price}</p>
                                        <img src={coin.item.data.sparkline} alt="sparkline" className='w-24 lg:w-28 lg:h-10 h-8 mx-3' />
                                    </div>
                                )
                            )
                        })
                    }
                </Slider>
            </div>

        </div>
    )
}

export default YouMayAlsoLike

export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} next-arrow`}
            style={{ ...style, marginRight: '20px', display: "flex", backgroundColor: 'white', boxShadow: "0px 0px  5px black", zIndex: 1, color: 'black', justifyContent: "center", alignItems: "center" }}
            onClick={onClick}
        />
    );
}

export function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} prev-arrow`}
            style={{ ...style, marginLeft: '20px', display: "flex", backgroundColor: 'white', boxShadow: "0px 0px  5px black", zIndex: 1, justifyContent: "center", alignItems: "center" }}
            onClick={onClick}
        />
    );
}

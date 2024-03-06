import React, { useEffect } from 'react'

import Slider from "react-slick";

const YouMayAlsoLike = ({ trendingCoins }) => {
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 2.2,

        initialSlide: 0,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     // {
        //     //     breakpoint: 600,
        //     //     settings: {
        //     //         slidesToShow: 2,
        //     //         slidesToScroll: 2,
        //     //         initialSlide: 2
        //     //     }
        //     // },
        //     // {
        //     //     breakpoint: 480,
        //     //     settings: {
        //     //         slidesToShow: 1,
        //     //         slidesToScroll: 1
        //     //     }
        //     // }
        // ],
        speed: 500,
        nextArrow: <SampleNextArrow className='' />,
        prevArrow: <SamplePrevArrow className='' />,

    };
    return (
        <div className='mb-2'>
            <h1 className='font-bold text-xl pt-2'>You May Also Like</h1>

            <div className='slider-container mt-2 '>
                <Slider {...settings} className='' >
                    {
                        trendingCoins.map((coin, index) => {
                            return (
                                coin.item.data.price.length < 10 &&
                                (
                                    <div key={index} className='border flex gap-2 flex-col justify-center items-start p-2 rounded-md bg-[#fefefe] '>
                                        <div className='flex justify-start items-center'>
                                            <img src={coin.item.large} alt="trending-coin" className='w-4 h-4' />
                                            <p className='text-xs ml-1'>{coin.item.symbol}</p>
                                            <span className='text-[8px] p-[2px] bg-[#eaf8f4]  text-[#15b179] rounded-sm ml-[2px] '>+ 2.51%</span>
                                        </div>
                                        <p className='text-xs text-start font-semibold'>{coin.item.data.price}</p>
                                        <img src={coin.item.data.sparkline} alt="sparkline" className='w-24 h-8 mx-3' />
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

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} next-arrow`}
            style={{ ...style, display: "block", marginRight: '20px' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} prev-arrow`}
            style={{ ...style, display: "block", marginLeft: '20px' }}
            onClick={onClick}
        />
    );
}

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import CardCommerce from './CardCommerce';

export default function SwiperComponent({ products }) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
               
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    products.map((product) =>
                        <SwiperSlide>
                            <CardCommerce product={product} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    )
}
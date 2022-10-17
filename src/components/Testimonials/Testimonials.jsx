import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials-container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                <SwiperSlide className='testimonial'>
                    <div className="client-avatar">
                        <img src={avatar1} alt="Avatar One" />
                    </div>
                    <h5>George Michaels</h5>
                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsum voluptates blanditiis sunt sequi tenetur, unde ut corporis illo expedita ea cum, iure, possimus cumque ullam animi commodi exercitationem reiciendis!</small>
                </SwiperSlide>
                <SwiperSlide className='testimonial'>
                    <div className="client-avatar">
                        <img src={avatar2} alt="Avatar Two" />
                    </div>
                    <h5>Athena Dane</h5>
                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsum voluptates blanditiis sunt sequi tenetur, unde ut corporis illo expedita ea cum, iure, possimus cumque ullam animi commodi exercitationem reiciendis!</small>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Testimonials
import React from 'react';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import './testimonials.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
    const data = [
        {
            avatar: AVTR1,
            name: 'Tina Snow',
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
        },
        {
            avatar: AVTR2,
            name: 'Shatta Wale',
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
        },
        {
            avatar: AVTR3,
            name: 'Kwame Despite',
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
        },
        {
            avatar: AVTR4,
            name: 'Nana Ama McBrwon',
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
        },
    ]
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper
                className="container testimonials__container"
                spaceBetween={40}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                {
                    data.map(({ avatar, name, review }) => (
                        <SwiperSlide className="testimonial">
                            <div className='client__avatar'>
                                <img src={avatar} alt={name} />
                            </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className='client__review'>
                                {review}
                            </small>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </section>
    )
}

export default Testimonials
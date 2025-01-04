import React from 'react';
import SwiperSlider from '../SwiperSlider/SwiperSlider';
import { Container } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    delay: 200,
    duration: 1000,
});

const Banner = () => {
    return (
        <Container maxWidth={false} className='mt-5' data-aos="fade-down">
            <SwiperSlider></SwiperSlider>
        </Container>
    );
};

export default Banner;
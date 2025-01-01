import React from 'react';
import SwiperSlider from '../SwiperSlider/SwiperSlider';
import { Container } from '@mui/material';

const Banner = () => {
    return (
        <Container maxWidth={false} className='mt-5'>
            <SwiperSlider></SwiperSlider>
        </Container>
    );
};

export default Banner;
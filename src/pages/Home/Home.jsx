import React from 'react';
import Banner from '../../components/Banner/Banner';
import { Container } from '@mui/material';
import Cards from '../../components/Cards/Cards';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const realEstate = useLoaderData();

    return (
        <Container maxWidth={false} className='lg:container p-0 m-0'>
            <Banner></Banner>
            <Cards realEstate={realEstate}></Cards>
        </Container>
    );
};

export default Home;
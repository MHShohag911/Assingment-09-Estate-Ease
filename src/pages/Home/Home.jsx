import React from 'react';
import Banner from '../../components/Banner/Banner';
import { Container } from '@mui/material';
import Cards from '../../components/Cards/Cards';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import Team from '../../components/Team/Team';
import axios from "axios";
import { useEffect, useState } from "react";
import Statistics from '../../components/Statistics/Statistics';

const Home = () => {
    const realEstate = useLoaderData();

    
    const [profileCards, setProfileCards] = useState([]);


    useEffect(()=>{
        axios.get('/teams.json')
        .then(response => {
            setProfileCards(response.data);
        })
    }, [])

    return (
        <Container maxWidth={false} className='lg:container p-0 m-0'>
            <Helmet>
                <title>Estate Ease | Home</title>
            </Helmet>
            <Banner></Banner>
            <Cards realEstate={realEstate}></Cards>
            <Team profileCards={profileCards}></Team>
            <Statistics></Statistics>
            <ToastContainer />
        </Container>
    );
};

export default Home;
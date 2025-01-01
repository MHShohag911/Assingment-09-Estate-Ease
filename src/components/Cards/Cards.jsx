import React from 'react';
import { HomeCard } from '../Card/HomeCard';

const Cards = ({realEstate}) => {
    return (
        <div className='mt-20'>
            <h2 className='text-4xl text-center font-bold my-10'>Choose Your Desired Property</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                realEstate.map(estate =>  <HomeCard key={estate.id} estate={estate}></HomeCard>)
            }
        </div>
        </div>
    );
};

export default Cards;
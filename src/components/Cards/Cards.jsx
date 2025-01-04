import React, { useEffect, useState } from "react";
import { HomeCard } from "../Card/HomeCard";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { TiArrowSortedDown } from "react-icons/ti";
// ..
AOS.init({
  delay: 200,
  duration: 1000,
});


const Cards = ({ realEstate }) => {
    const [cards, setCards] = useState([]);
    const [display, setDisplay] = useState([]);

    const handleSortBy = sort => {
        if(sort === 'all'){
            setDisplay(cards);
            return;
        }else if(sort === 'sale' || sort === 'rent'){
            const sorted = cards.filter(estate => estate.status === sort)
            setDisplay(sorted)
            const showAllButton = document.getElementById('showAll');
            showAllButton.classList.add('hidden')
            return;
        }else if(sort === 'rent'){
            const sorted = cards.filter(estate => estate.statue === sort)
            setDisplay(sorted);
            const showAllButton = document.getElementById('showAll');
            showAllButton.classList.add('hidden')
            return;
        }
    }

    const handleShowAll = () => {
        setDisplay(cards);
    }

    useEffect(()=>{
        const sliced = realEstate.slice(0,6);
        setCards(realEstate)
        setDisplay(sliced)
    }, [realEstate])

  return (
    <div className="mt-20">
      <h2 data-aos="flip-up" className="text-4xl text-center font-bold my-5">
        Choose Your Desired Property
      </h2>
      <div className="flex justify-center px-5 my-5 lg:justify-end">
        <Menu>
          <MenuHandler >
            <Button className="bg-primary flex items-center">Sort By <TiArrowSortedDown className="text-xl ml-2"/></Button>
          </MenuHandler>
          <MenuList className="bg-black border-none text-white font-bold ">
            <MenuItem onClick={()=>handleSortBy('all')} className="focus:bg-primary focus:text-white">All</MenuItem>
            <MenuItem onClick={()=>handleSortBy('sale')} className="focus:bg-primary focus:text-white">Sale</MenuItem>
            <MenuItem onClick={()=>handleSortBy('rent')} className="focus:bg-primary focus:text-white">Rent</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {display.map((estate) => (
          <HomeCard key={estate.id} estate={estate}></HomeCard>
        ))}
      </div>
      <div onClick={handleShowAll} id="showAll" className="flex justify-center mt-10">
        {
            display.length<7? <Button className="border-primary text-primary border-2 hover:bg-primary hover:text-white" variant="outlined">Show All</Button>:''
        }
      </div>
    </div>
  );
};

export default Cards;

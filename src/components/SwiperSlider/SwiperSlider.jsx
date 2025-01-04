import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SwiperSlider.css';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SwiperSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const [estateData, setEstateData] = useState([])

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  useEffect(()=>{
    fetch('/realEstateSlider.json')
    .then(res => res.json())
    .then(data => setEstateData(data))
    .catch(error => console.error(error))
  }, [])

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-full"
      >
        {estateData.map((estate) => (
          <SwiperSlide key={estate.id} className="w-full h-full">
            <div className="slide-content relative">
              <img src={estate.image} alt={estate.title} className="w-full h-auto" />
              <div className="overlay absolute top-16 md:top-[45%]  left-0 right-0 m-auto bg-black w-48 md:w-1/2 py-5 bg-opacity-30 ">
                <h3 className="estate-title text-white text-xl md:text-4xl z-10 font-bold">{estate.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}

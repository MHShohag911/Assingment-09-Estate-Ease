import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Team.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  delay: 200,
  duration: 1000,
});

import { ProfileCard } from "../ProfileCard/ProfileCard";

export default function Team({ profileCards }) {
  return (
    <>
      <h2 className="text-4xl text-center font-bold my-5 mt-10">Meet Our Team</h2>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        data-aos="fade-down"
        className="mySwiper one-slide md:two-slide lg:three-slide"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {profileCards.map((profile) => (
          <SwiperSlide>
            <ProfileCard profile={profile}></ProfileCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

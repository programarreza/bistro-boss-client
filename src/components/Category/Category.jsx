import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src="https://i.postimg.cc/2SG1X4Ch/slide1.jpg" alt="" />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.postimg.cc/CxSZNvpw/slide2.jpg" alt="" />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.postimg.cc/hP9zTkwC/slide3.jpg" alt="" />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.postimg.cc/fbgJMDtb/slide4.jpg" alt="" />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            desserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.postimg.cc/XvvrMpvh/slide5.jpg" alt="" />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            salads
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;

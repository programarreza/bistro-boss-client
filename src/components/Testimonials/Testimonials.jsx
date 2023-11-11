import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="px-12">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"testimonials"}
      ></SectionTitle>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper text-center"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="m-24">
              <div className=" flex justify-center">
				<Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
				</div>
				<div className="flex justify-center text-7xl mt-6">
				<BiSolidQuoteSingleLeft />
				<BiSolidQuoteSingleLeft />
				</div>
              <p className="py-6">{review.details}</p>
              <h3 className="text-[#CD9003] text-3xl">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;

import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import requests from "../../API/requests";
import Titles from "../Titles";

function MovieCasts({ credits }) {
  return (
    <div className="my-12">
      <Titles title="Casts" Icon={FaUserFriends} />
      <div className="mt-10">
        <Swiper
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          modules={[Autoplay]}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
        >
          {credits.map((actor, index) => (
            <div key={index}>
              {actor.profile_path && (
                <SwiperSlide key={index}>
                  <div className="w-full p-3  italic text-text rounded flex-colo bg-dry border border-gray-800 ">
                    <img
                      src={requests.URL + actor.profile_path}
                      className=" w-full  h-64  rounded mb-4  object-cover"
                      alt=""
                    />
                    <p>{actor.name}</p>
                  </div>
                </SwiperSlide>
              )}
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieCasts;

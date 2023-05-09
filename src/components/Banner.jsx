import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import requests from "../API/requests";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart, FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
// import { Link } from "react-router-dom";

function Banner() {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    axios.get(`${requests.baseUrl}${requests.fetchTrending}`).then(data => {
      setTrending(data.data.results);
    });
  }, []);
  return (
    <div>
      <div className=" relative w-full">
        <Swiper
          direction="vertical"
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={1000}
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full xl:h-96 bg-dry lg:h-64 h-48 rounded"
        >
          {trending.slice(0, 6).map((movie, index) => (
            <SwiperSlide key={index} className=" relative">
              <img
                src={requests.URL + movie.poster_path}
                alt={movie.title}
                className=" object-cover w-full h-full "
              />
              <div className="absolute xl:pl-36 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap:5 gap-4  linear-bg ">
                <h1 className="xl:text-4xl  truncate capitalize font-sans sm:text-2xl text-xl  font-bold">
                  {movie.title ? movie.title : movie.name}
                </h1>
                <div className="flex gap-5 items-center text-dryGray">
                  <div className="flex  justify-center  gap-2">
                    <span className="flex  p-1 gap-2 text-sm font-medium">
                      <FaRegCalendarAlt className=" text-subMain" />
                      {movie.release_date
                        ? movie.release_date
                        : movie.first_air_date}
                    </span>
                    <span
                      className={`${
                        movie.vote_average >= 8
                          ? "text-green-500"
                          : movie.vote_average >= 6
                          ? "text-yellow-400"
                          : "text-red-600"
                      } flex p-1 bg-dry rounded linear-bg items-center gap-2 text-sm font-medium`}
                    >
                      {movie.vote_average.toFixed(1)}
                      <AiOutlineStar className=" text-star " />
                    </span>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <a
                    href={`/movie/${movie.id}`}
                    className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs "
                  >
                    Watch
                  </a>
                  <button className=" bg-white bg-opacity-30 hover:text-subMain transitions px-4 py-3 rounded text-white">
                    <FaHeart />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;

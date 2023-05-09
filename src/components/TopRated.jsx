import React from "react";
import Titles from "./Titles";
import {
  BsBookmarkStarFill,
  BsCaretLeftFill,
  BsCaretRightFill,
} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Autoplay, Navigation } from "swiper";
import requests from "../API/requests";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import Rating from "./Stars";

function TopRated() {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const [topRated, setTopRated] = useState([]);
  const classNames =
    "hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white";
  useEffect(() => {
    axios.get(`${requests.baseUrl}${requests.fetchTopRated}`).then(data => {
      setTopRated(data.data.results);
    });
  }, []);
  return (
    <div className=" my-16">
      <Titles title="Top Rated " Icon={BsBookmarkStarFill} />
      <div className="mt-10">
        <Swiper
          navigation={{ nextEl, prevEl }}
          slidesPerView={4}
          spaceBetween={40}
          autoplay={true}
          speed={1000}
          loop={true}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1028: { slidesPerView: 4, spaceBetween: 40 },
          }}
        >
          {topRated.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className=" p-4 h-rate hovered border-border bg-dry rounded-lg overflow-hidden">
                <img
                  src={requests.URL + movie.poster_path}
                  alt={movie.title}
                  className=" w-full h-full object-cover rounded-lg"
                />
                <div className=" px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70  top-0 left-0 right-0 bottom-0">
                  <button className="w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white">
                    <FaHeart />
                  </button>
                  <a
                    href={`/movie/${movie.id}`}
                    className=" font-semibold text-xl truncate line-clamp-2   "
                  >
                    {movie.title ? movie.title : movie.name}
                  </a>
                  <div className="flex gap-2 text-star">
                    <Rating value={movie.vote_average / 2} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full px-1 flex-rows gap-6 pt-12">
          <button className={classNames} ref={node => setPrevEl(node)}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={node => setNextEl(node)}>
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopRated;

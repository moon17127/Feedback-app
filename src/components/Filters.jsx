import axios from "axios";
import React from "react";
import { useState, useEffect, Fragment } from "react";
import { FaHeart } from "react-icons/fa";
import requests from "../API/requests";

const YEAR = [
  {
    year_date: 2022,
  },
  {
    year_date: 2021,
  },

  {
    year_date: 2019,
  },
  {
    year_date: 2018,
  },
  {
    year_date: 2017,
  },

  {
    year_date: 2016,
  },
  {
    year_date: 2015,
  },
  {
    year_date: 2014,
  },
  {
    year_date: 2013,
  },
  {
    year_date: 2012,
  },

  {
    year_date: 2011,
  },
  {
    year_date: 2010,
  },
  {
    year_date: 2009,
  },
  {
    year_date: 2008,
  },
  {
    year_date: 2007,
  },
  {
    year_date: 2006,
  },
  {
    year_date: 2005,
  },
  {
    year_date: 2004,
  },
  {
    year_date: 2003,
  },
  {
    year_date: 2002,
  },
  {
    year_date: 2001,
  },
  {
    year_date: 2000,
  },
  {
    year_date: 2022,
  },
];
const GENRES = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];
const TIME = [
  {
    real: "2 - 3 Hours",
    fake: 180,
  },
  {
    real: "1 - 2  Hours",
    fake: 110,
  },
  {
    real: "0 - 1  Hour",
    fake: 60,
  },
];
function Filters() {
  const [swap, setSwap] = useState(28);
  const [item, setItem] = useState([]);
  const [year, setYear] = useState("2022");
  const [time, setTime] = useState(180);
  useEffect(() => {
    axios
      .get(
        `${requests.baseUrl}/discover/movie?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en&.desc&page=1&primary_release_year=${year}&with_genres=${swap}&with_runtime.lte=${time}`
      )
      .then(data => {
        setItem(data.data.results);
      });
  }, [swap, year, time]);

  return (
    <>
      <div className="my-6 bg-dry border text-dryGray py-3 border-gray-800 grid md:grid-cols-3 grid-cols-2 lg:gap-20 rounded">
        <div className="relative  p-2 text-center">
          <span className="block truncate py-2">Category</span>

          <select
            className="relative border border-gray-800 w-full text-white text-left bg-main rounded-lg shadow-sm py-2 md:text-base pl-6 pr-10 sm:text-xs"
            onChange={e => setSwap(e.target.value)}
          >
            {GENRES.map((cat, i) => (
              <option key={i} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="relative p-2 text-center">
          <span className="block truncate py-2">Sort By Year</span>
          <select
            className="relative border border-gray-800 w-full text-white text-left bg-main rounded-lg shadow-sm py-2 pl-6 pr-10 md:text-base sm:text-xs"
            onChange={e => setYear(e.target.value)}
          >
            {YEAR.map((date, i) => (
              <option className="w-16" key={i}>
                {date.year_date}
              </option>
            ))}
          </select>
        </div>
        <div className="relative p-2 text-center">
          <span className="block truncate py-2">Sort By Hours</span>
          <select
            className="relative border border-gray-800 w-full text-white text-left bg-main rounded-lg shadow-sm py-2 pl-6 md:text-base pr-10 sm:text-xs"
            onChange={e => setTime(e.target.value)}
          >
            {TIME.map((time, i) => (
              <option className="w-16" value={time.fake} key={i}>
                {time.real}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="my-16">
        <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-10">
          {item.map((movie, index) => (
            <div
              key={index}
              className=" border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden"
            >
              <a href={`/movie/${movie.id}`}>
                <img
                  src={
                    movie.poster_path
                      ? requests.URL + movie.poster_path
                      : "https://img.etimg.com/thumb/width-1200,height-900,imgsize-441780,resizemode-1,msid-81387963/magazines/panache/women-hold-just-8-key-hod-positions-in-indian-film-industry.jpg"
                  }
                  alt={movie.title}
                  className=" object-cover w-full h-96 "
                />
              </a>
              <div className=" absolute flex  flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
                <h3 className="font-semibold truncate">
                  {movie.original_title ? movie.original_title : movie.title}
                </h3>
                <button
                  key={index}
                  className={` bg-subMain h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md  `}
                >
                  <FaHeart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Filters;

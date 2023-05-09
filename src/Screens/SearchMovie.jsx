import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import requests from "./../API/requests";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Footer from "../Layout/Footer/Footer";
function SearchMovie({ movie }) {
  const [searchMovie, setSearchMovie] = useState([]);

  console.log(movie);
  const api_key = "19f84e11932abbc79e6d83f82d6d1045";
  useEffect(() => {
    axios
      .get(
        ` ${requests.baseUrl}/search/movie?api_key=${api_key}&query=${movie}}`
      )
      .then(data => setSearchMovie(data.data.results));
  }, [movie]);

  return searchMovie.length > 0 ? (
    <div className=" flex flex-col justify-between  min-h-screen z-50">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="10"
        data-aos-offset="20"
        className="grid sm:mt-12 mb-16 container px-6 mx-auto mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-10"
      >
        {searchMovie.map((movie, index) => (
          <div
            key={index}
            className=" border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden"
          >
            <Link to={`/movie/${movie.id}`}>
              <img
                src={requests.URL + movie.poster_path}
                alt={movie.title}
                className=" object-cover w-full h-96 "
              />
            </Link>
            <div className=" absolute flex  flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
              <h3 className="font-semibold truncate">
                {movie.title ? movie.title : movie.name}
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
      <Footer />
    </div>
  ) : null;
}

export default SearchMovie;

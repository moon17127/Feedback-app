import React from "react";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
import requests from "../../API/requests";
import { BiTimeFive } from "react-icons/bi";
// import { BiArrowBack, BiTimeFive } from "react-icons/bi";
import { FaPlay, FaRegCalendarAlt, FaShareAlt } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
function MovieInfo({ movie, videoKey, genres, languages }) {
  // const navigate = useNavigate();
  return (
    <>
      {/* <div className="flex-btn   container  z-30 mx-auto flex-wrap mb-4 gap-2  bg-main rounded border border-gray-800 p-6">
        <button
          onClick={() => navigate(-1)}
          className="md:text-xl text-sm flex gap-3 items-center font-bold text-white"
        >
          <BiArrowBack />
        </button>
      </div> */}
      <div className="w-full xl:h-screen  relative text-white">
        <img
          src={requests.URL + movie.backdrop_path}
          className="w-full hidden xl:inline-block h-full object-cover "
          alt={movie.original_title}
        />
        <div className="xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0">
          <div className="container px-3 mx-auto x2l:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8">
            <div className=" xl:col-span-1 w-full  xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden">
              <img
                src={requests.URL + movie.poster_path}
                alt={movie.original_title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
              <div className="col-span-3 flex flex-col gap-10">
                {/*Title */}
                <h1 className="xl:-text-4xl capitalize font-sans text-2xl font-bold ">
                  {movie.title}
                  {/* flex items */}
                </h1>
                <div className="flex items-center gap-4 text-sm  font-medium text-dryGray">
                  <span className="flex-colo rounded  bg-subMain text-xs px-2  py-1">
                    HD 4k
                  </span>
                  <span> {genres} </span>
                  <span className="flex items-center gap-2">
                    <FaRegCalendarAlt className="w-4 h-4 text-subMain" />
                    {/* Calendar icon */}
                    {movie.release_date}
                  </span>
                  <span className="flex items-center gap-2">
                    <BiTimeFive className="w-4 h-4 text-subMain" />
                    {/*Time icon */}
                    {movie.runtime} mins
                  </span>

                  {/* description */}
                </div>
                <p className=" text-text test-sm leading-7">{movie.overview}</p>
                <div className=" grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main border border-gray-800 rounded-lg">
                  {/* share */}
                  <div className="col-span-1 flex-colo border-r border-border">
                    <button className=" w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20">
                      <FaShareAlt />
                    </button>
                  </div>
                  {/* language */}
                  <div className="col-span-2 flex-colo font-medium text-sm">
                    <p>
                      language :{" "}
                      <span className="ml-2 truncate">{languages}</span>
                    </p>
                  </div>
                  {/* watch button */}
                  <div className="sm:col-span-2 col-span-3 flex justify-end font-medium text-sm">
                    <Link
                      to={`/watch/movie/${videoKey}`}
                      className="bg-dry py-4 hover:bg-subMain transitions border-2 border-subMain rounded-full flex-rows gap-4 w-full sm:py-3"
                    >
                      <FaPlay className="w-3 h-3" />
                      watch
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-2 md:mt-0 mt-2 flex justify-end">
                <button className="md:w-1/4 w-full relative flex-colo bg-subMain hover:bg-transparent border-2 border-subMain transitions md:h-64 h-20 rounded font-medium ">
                  <div className="flex-rows gap-6 text-md uppercase tracking-widest absolute  md:rotate-90">
                    Download <FiLogIn className="w-6 h-6" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieInfo;

// /iaYpEp3LQmb8AfAtmTvpqd4149c.png

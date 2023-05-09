import React from "react";
import Titles from "../Titles";
import { BsCollectionFill } from "react-icons/bs";
import requests from "../../API/requests";
import { FaHeart } from "react-icons/fa";
function RelatedMovies({ related }) {
  console.log(related);
  return (
    <div className="my-16">
      <Titles title="Recommended" Icon={BsCollectionFill} />
      <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-10">
        {related.map((movie, index) => (
          <div
            key={index}
            className=" border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden"
          >
            <a href={`/movie/${movie.id}`}>
              <img
                src={
                  movie.poster_path
                    ? requests.URL + movie.poster_path
                    : "https://controversia.com.br/wp-content/uploads/2022/02/netflix.jpg"
                }
                alt={movie.title}
                className=" object-cover w-full h-96 "
              />
            </a>
            <div className=" absolute flex  flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
              <h3 className="font-semibold truncate">
                {movie.title ? movie.title : movie.name}
              </h3>
              <button className=" h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md bg-subMain text-white">
                <FaHeart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedMovies;

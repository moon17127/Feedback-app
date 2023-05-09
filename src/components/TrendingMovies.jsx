import React from 'react';
import Titles from './Titles';

import { BsCollectionFill } from 'react-icons/bs';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import requests from '../API/requests';
import { FaHeart } from 'react-icons/fa';

function TrendingMovies() {
  const [isActive, setIsActive] = useState(false);
  const [popular, setPopular] = useState([]);
  const [color, setColor] = useState(null);
  console.log(color);
  useEffect(() => {
    axios.get(`${requests.baseUrl}${requests.fetchTrending}`).then(data => {
      setPopular(data.data.results);
    });
  }, []);

  // console.log(isActive);
  return (
    <div className="my-16">
      <Titles title="Trending Movies" Icon={BsCollectionFill} />
      <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-10">
        {popular.map((movie, index) => (
          <div
            key={index}
            className=" border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden"
          >
            <a href={`/movie/${movie.id}`}>
              <img
                src={requests.URL + movie.poster_path}
                alt={movie.title}
                className=" object-cover w-full h-96 "
              />
            </a>
            <div className=" absolute flex  flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
              <h3 className="font-semibold truncate">
                {movie.title ? movie.title : movie.name}
              </h3>
              <button
                key={index}
                id={index}
                onClick={e => {
                  setIsActive(!isActive);
                  setColor(e.target);
                }}
                className={`${
                  isActive
                    ? 'bg-gray-200 border-subMain '
                    : 'bg-subMain border-gray-200 '
                }  h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 rounded-md  `}
              >
                <FaHeart
                  className={`${isActive ? 'text-subMain ' : 'text-white'}`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingMovies;

import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/Single/MovieInfo";
import RelatedMovies from "../components/Single/RelatedMovies";
import Layout from "../Layout/Layout";
import requests from "./../API/requests";
import MovieCasts from "./../components/Single/MovieCasts";
import MovieRates from "./../components/Single/MovieRates";
// https://api.themoviedb.org/3/movie/620249?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US
function SingleMovie() {
  const { id } = useParams();
  // https://api.themoviedb.org/3/movie/436270/credits?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US
  const [movie, setMovie] = useState([]);
  const [videoKey, setVideoKey] = useState(null);
  const [genres, setGenres] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [credits, setCredits] = useState([]);
  const [related, getRelated] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${requests.baseUrl}/movie/${id}?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&append_to_response=videos`
      )
      .then(data => {
        setMovie(data.data);
        setVideoKey(data.data.videos.results[0].key);
        setGenres(data.data.genres[0].name);
        setLanguages(data.data.spoken_languages[0].english_name);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
      )
      .then(data => {
        setCredits(data.data.cast);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
      )
      .then(data => {
        getRelated(data.data.results);
      });
  }, [id]);
  return (
    <Layout>
      <MovieInfo
        movie={movie}
        videoKey={videoKey}
        genres={genres}
        languages={languages}
      />
      <div className="container mx-auto min-h-screen px-2 my-6">
        <MovieCasts credits={credits} />
        {/* rate */}
        <MovieRates movie={movie} credits={credits} />
        {/* related*/}
        <RelatedMovies related={related} />
      </div>
    </Layout>
  );
}

export default SingleMovie;

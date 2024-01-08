// components/Cards.js
import React, { useState, useEffect } from "react";
import style from "./cards.module.css";
import { fetchTrendingMovies } from "../services/movieService";

interface Movie {
  id: number;
  title: string;
  vote_average: string;
  poster_path: string;
}

function Cards() {
  const [movieData, setMovieData] = useState<Movie[] | null>(null);



  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setMovieData(movies);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className={style.cardContainer}>
      {movieData && movieData.length > 0 ? (
        movieData.map((movie: Movie) => (
          <div
            key={movie.id}
            className={style.cardStyle}
         
          >
            <div className={style.imageDiv}>
              <img
                className={style.imageStyle}
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
               
              />
            </div>
            <div className={style.meta}>
              <h3>{movie.title}</h3>
              <p>{movie.vote_average}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Cards;

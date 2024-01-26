import React from 'react';
import style from "./contents.module.css";
import Cards from './cards';

interface Movie {
  id: number;
  title: string;
  vote_average: string;
  poster_path: string;
}

export default function Contents() {
  // Assuming you have some movieData to pass, replace the empty array with your data
  const movieData: Movie[] = [
    // your movie data objects here
  ];

  return (
    <div className={style.main}>
      <div className={style.contents}>
        {/* Pass the movieData prop to the Cards component */}
        <Cards movieData={movieData} />
      </div>
    </div>
  );
}

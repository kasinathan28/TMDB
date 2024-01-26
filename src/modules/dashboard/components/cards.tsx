// components/Cards.tsx
import React from "react";
import style from "./cards.module.css";
import { useRouter } from "next/router";

interface Media {
  id: number;
  title: string;
  vote_average: string;
  poster_path: string;
}



interface CardsProps {
  movieData: Media[] | null;
}

function Cards({ movieData }: CardsProps) {
  const router = useRouter();

  const handleCardClick = (id: number) => {
    router.push(`/details/${id}`);
  };

  return (
    <div className={style.cardContainer}>
      {movieData && movieData.length > 0 ? (
        movieData.map((media: Media) => (
          <div
            key={media.id}
            className={style.cardStyle}
            onClick={() => handleCardClick(media.id)}
          >
            <div className={style.imageDiv}>
              <img
                className={style.imageStyle}
                alt={media.title}
                src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`}
              />
            </div>
            <div className={style.meta}>
              <h3>{media.title}</h3>
              <p>{media.vote_average}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No movies available</p>
      )}
    </div>
  );
}

export default Cards;

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './dashboardad.module.css';
import { fetchTrendingMovies } from '../services/movieService';

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

export default function DashboardAd() {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <></>, // Pass an empty ReactNode as a placeholder
  };

  return (
    <div>
      <div className={style.main}>
        {Array.isArray(trendingMovies) && trendingMovies.length > 0 ? (
          <Slider {...settings}>
            {trendingMovies.map((movie) => (
              <div key={movie.id} className={style.slideContainer}>
                <img
                  src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
                  alt={movie.title}
                />
                <div className={style.titleCard}>
                  <h2>{movie.title}</h2>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p>No trending movies available</p>
        )}
      </div>
    </div>
  );
}

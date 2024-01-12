// pages/details/[id].tsx
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchMovieDetails } from "@/modules/details/services/movieDetails";
import styles from "@/themes/detailsPage.module.css";
import Navbar from "@/modules/dashboard/components/navbar";
const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setLoading(true);
        const details = await fetchMovieDetails(id);
        setMovieDetails(details);
      } catch (error) {
        setError(error);
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getMovieDetails();
    }
  }, [id]);

  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.container}>
        {loading && <p className={styles.loading}>Loading...</p>}
        {error && <p className={styles.error}>{error}</p>}
        {movieDetails && (
          <div className={styles.moviedetails}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
              alt={movieDetails.title}
            />
            <div className={styles.overlay}>
              <div className={styles.content}>

              <div className={styles.poster}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
                  alt={movieDetails.poster_path}
                />
              </div>
              <div>

              <h2>{movieDetails.title}</h2>
              <p>{movieDetails.overview}</p>
              <p>Popularity: {movieDetails.popularity}</p>
              <p>Release Date: {movieDetails.release_date}</p>
              </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;

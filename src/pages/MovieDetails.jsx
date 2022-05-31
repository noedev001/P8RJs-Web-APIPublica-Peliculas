import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Spinner } from "../components/Spinners";
import { getMovieImg } from "../utils/getMovieImg";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoding, setIsLoding] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoding(true);
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoding(false);
    });
  }, [movieId]);

  if (isLoding) {
    return <Spinner />;
  }

  // const imagenUrl = process.env.REACT_APP_IMG + movie.poster_path;

  const imagenUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className={styles.detailsContainer}>
      <img
        src={imagenUrl}
        alt={movie.title}
        className={styles.col + " " + styles.movieImage}
      />
      <div className={styles.col + "" + styles.movieDetails}>
        <p className={styles.firsItem}>
          <strong> Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong> Description: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}

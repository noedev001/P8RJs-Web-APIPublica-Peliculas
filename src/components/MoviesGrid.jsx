import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { get } from "../utils/httpClient";

import { MovieCard } from "./MovieCard";

import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinners";

export function MoviesGrid() {
  //let movies = [];
  const moviesState = useState([]);

  const [movies, setmovies] = moviesState;

  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    get(searchUrl).then((data) => {
      setmovies(data.results);
      setIsLoading(false);
    });
  }, [search, setmovies]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

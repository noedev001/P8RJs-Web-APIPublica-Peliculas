import styles from "./App.module.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Peliculas</h1>
        </Link>
        {/*     <Link to="/">Home</Link>
        <br />
        <Link to="/movie">Movie</Link> */}
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/">404</Route>
        </Switch>
      </main>
    </Router>
  );
}

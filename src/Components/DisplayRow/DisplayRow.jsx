import React from "react";
import styles from "./DisplayRow.module.css";
import SlideShow from "../SlideShow/SlideShow";
import { movies } from "../../Data/Data";

function DisplayRow() {
  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="Netflix Trending" movies={movies.trending} />
      <SlideShow title="Popular on Netflix" movies={movies.topRated} />
      <SlideShow title="Action" movies={movies.action} />
      <SlideShow title="Comedy" movies={movies.comedy} />
      <SlideShow title="Romance" movies={movies.romance} />
      <SlideShow title="Horror Movies" movies={movies.horror} />
      <SlideShow title="Documentaries" movies={movies.documentaries} />
    </div>
  );
}

export default DisplayRow;
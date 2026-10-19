import React, { useRef } from "react";
import styles from "./SlideShow.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

function SlideShow({ title, movies }) {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    trackRef.current?.scrollBy({ left: direction * 1008, behavior: "smooth" });
  };

  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.Row}>
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => scroll(-1)}
          aria-label="Previous"
        >
          <ChevronLeft size={28} />
        </button>
        <div className={styles.track} ref={trackRef}>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => scroll(1)}
          aria-label="Next"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}

export default SlideShow;
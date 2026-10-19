import React from "react";
import styles from "./MovieCard.module.css";
import { Play, Plus, Check, ChevronDown } from "lucide-react";

function MovieCard({ movie }) {
  let genres = ["Adventure", "Action", "Thriller"];

  return (
    <div className={styles.cardWrapper}>
      <img
        className={styles.poster}
        src={movie?.poster_path}
        alt="poster image"
      />

      <div className={styles.hoverCard}>
        <img
          className={styles.hoverImage}
          src={movie?.backdrop_path}
          alt="hover image"
        />

        <div className={styles.badge}>Recently Added</div>

        <div className={styles.buttonsRow}>
          <Play
            className={styles.circleButton}
            color="white"
            size={40}
            fill="white"
          />
          <Plus
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <Check
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <ChevronDown
            className={styles.circleButtonSmall}
            color="white"
            size={40}
          />
        </div>

        <div className={styles.metaRow}>
          <span className={styles.tag}>U/A 16+</span>
          <span className={styles.tag}>Movie</span>
          <span className={styles.tag}>HD</span>
        </div>

        <div className={styles.genres}>
          {genres.map((g, index) => {
            return (
              <span key={index}>
                {g}
                {index < genres.length - 1 && (
                  <span className={styles.dot}>•</span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
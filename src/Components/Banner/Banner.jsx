import React from "react";
import netflixBannerLog from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import styles from "./Banner.module.css";
import { bannerMovie } from "../../Data/Data";

function Banner() {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `URL("${bannerMovie.backdrop_path}")`,
      }}
    >
      <div className={styles.contents}>
        <img
          className={styles.logoImg}
          src={netflixBannerLog}
          alt="Netflix logo"
        />

        <h1 className={styles.title}>{bannerMovie.name}</h1>

        <h1 className={styles.description}>
          {truncate(bannerMovie.overview, 120)}
        </h1>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <Play size={30} />
            Play
          </button>
          <button className={styles.button}>
            <Info size={30} />
            My List
          </button>
        </div>
      </div>
      <div className={styles.fadeButton}></div>
    </div>
  );
}

export default Banner;
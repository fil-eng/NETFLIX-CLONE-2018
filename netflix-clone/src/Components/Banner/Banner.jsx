import { useEffect, useState } from "react";
import { axiosInstance } from "../../Utils/axiosInstance";
import { requests } from "../../Utils/requests";
import styles from "./Banner.module.css";
function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(requests.Action);
        let item = response?.data?.results;
        const randomIndex = Math.floor(Math.random() * item.length);
        setMovie(item[randomIndex]);
        // console.log(item[randomIndex]); /* first we got the movie*/
        // console.log(item[randomIndex].backdrop_path);/* Then the background_img from the movie*/
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  // console.log(movie?.backdrop_path);
  //image.tmdb.org/t/p/w500/2yo2k8CmgZxfBQYAZ8TnHIYzEme.jpg
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className={styles.hero_wrapper}>
      <div
        style={{
          backgroundImage: `url(
          https://image.tmdb.org/t/p/w500/${movie.backdrop_path}
        )`,
          width: "100%",
          height: "400px",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={styles.heroSection}
      >
        <div className={styles.playlist_wrapper}>
          <h2>{movie.name || movie.title}</h2>
          <div className={styles.buttons}>
            <button className={styles.play}>Play</button>
            <button className={styles.list}>My List</button>
          </div>
          <p className={styles.overview}>
            {truncateString(movie.overview, 120)}
          </p>
        </div>
      </div>
      <div className={styles.bottomshadow}></div>
    </div>
  );
}

export default Banner;

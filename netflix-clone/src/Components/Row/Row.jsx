import { useEffect, useState } from "react";
import styles from "./Row.module.css";
import { axiosInstance } from "../../Utils/axiosInstance";
import YouTube from "react-youtube";

function Row({ title, fetchURL, isTrue }) {
  const [movies, setMovies] = useState([]);
  const [Trailers, setTrailers] = useState(null);
  // console.log(isTrue);
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(fetchURL);
        // console.log(response?.data?.results);
        setMovies(response?.data?.results);
      } catch (error) {
        console.error("Error fetching trailers:", error);
        return [];
      }
    })();
  }, [fetchURL]);
  const handleonClick = async (movieId) => {
    // console.log(movieId);
    try {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const response = await axiosInstance.get(
        `/movie/${movieId}/videos?api_key=${API_KEY}`
      );
      const videos = response?.data?.results;
      // console.log(videos);
      const trailer = videos.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      if (trailer) {
        setTrailers(trailer.key);
      }
    } catch (error) {
      console.error("Error fetching trailers:", error);
      return [];
    }
  };
  // console.log(Trailers);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0, // Do not autoplay
    },
  };
  return (
    <div className={styles.rowSection}>
      <h2>{title}</h2>
      {movies?.length > 0 && (
        <div className={styles.Row}>
          {movies?.map((movie, i) => (
            <img
              key={movie.id || i}
              src={`https://image.tmdb.org/t/p/w500/${
                isTrue ? movie.backdrop_path : movie?.poster_path
              }`}
              alt={movie.title}
              className={`${isTrue ? styles.backdrop : styles.poster}`}
              onClick={() => handleonClick(movie.id)}
            />
          ))}
        </div>
      )}
      <div>
        {Trailers ? (
          <YouTube videoId={Trailers} opts={opts} />
        ) : (
          <p>No trailer available.</p>
        )}
      </div>
    </div>
  );
}

export default Row;

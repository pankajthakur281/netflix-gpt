import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const videoTrailer = useSelector((store) => store.movies?.videoTrailer);

  useMovieTrailer(movieId);
  return (
    <div className="w-screen overflow-hidden">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          videoTrailer?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="autoplay; encrypted-media;"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

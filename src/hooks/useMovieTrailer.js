import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addVideoTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en",
      API_OPTIONS
    );
    const json = await data.json();
   
    const filterData = json.results.filter((video) => video.type === "Trailer"); 
    const trailer = filterData.length ? filterData[10] : json.results[0];
    dispatch(addVideoTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;

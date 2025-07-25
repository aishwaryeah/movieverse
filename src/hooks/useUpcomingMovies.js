import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
    const jsonData = await data.json();
    dispatch(addUpcomingMovies(jsonData.results));
  }

  useEffect(() => {
    getUpcomingMovies();
  },[]);
};

export default useUpcomingMovies;
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTVSeries } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTVSeries = () => {
    const dispatch = useDispatch();

  const getTVSeries = async () => {
    const data = await fetch('https://api.themoviedb.org/3/tv/popular?page=1', API_OPTIONS);
    const jsonData = await data.json();
    dispatch(addTVSeries(jsonData.results));
  }

  useEffect(() => {
    getTVSeries();
  },[]);
};

export default useTVSeries;
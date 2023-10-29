import { useEffect, useState } from "react";
import axios from "axios";
export const useAxios = (params) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  axios.defaults.baseURL = "https://api.unsplash.com";

  const fetchdata = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      setResponse(res.data.results);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Make sure you include the access key in the URL
    fetchdata(params);
  }, [params]);

  return {
    response,
    isLoading,
    error,
    fetchdata: (url) => fetchdata(url),
  };
};

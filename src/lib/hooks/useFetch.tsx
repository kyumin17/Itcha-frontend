import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<null | unknown>(null);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetch;
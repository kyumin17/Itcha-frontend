import { useEffect, useState } from 'react';
import http from '../api/http';

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<null | unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await http.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetch;
import { useEffect, useState } from 'react';
import axios from 'axios';

const usePost = (url: string, form: any) => {
  const [error, setError] = useState<null | unknown>(null);

  useEffect(() => {
    const postData = async () => {
      try {
        await axios.post(url, form);
      } catch (error) {
        setError(error);
      }
    }

    postData();
  }, [url, form]);

  return error;
};

export default usePost;
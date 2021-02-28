import { useState, useEffect } from 'react';

export const useApi = (query) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const URL = 'http://localhost:3004/pictures';
    const URL2 = 'https://api.pexels.com/v1/search?query=nature';
    const URL3 = 'https://api.pexels.com/v1/curated?';
    const URL4 = 'https://api.pexels.com/v1/search?';

    fetch(URL2, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      }
    })
      .then(response => response.json())
      .then(result => {
        // console.log(result);
        setData(result.photos);
        // setData(result);
        setIsLoaded(true);
      })
      .catch(err => console.log(err))
  },[query]);

  return {
    data,
    setData,
    isLoaded,
  }
}

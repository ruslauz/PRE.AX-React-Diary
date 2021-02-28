import { useState, useEffect } from 'react';

export const useDb = (query) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const URL = 'http://localhost:3004/records';

    fetch(URL)
      .then(response => response.json())
      .then(result => {
        // console.log(result);
        setData(result);
        setIsLoaded(true);
      })
      .catch(err => console.log(err))
  },[]);

  return {
    data,
    isLoaded,
  }
}

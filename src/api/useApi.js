import { useState, useEffect } from 'react';

export const useApi = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('nature');

  useEffect(() => {
    setIsLoaded(false);
    const URL = 'http://localhost:3004/pictures';
    const URL2 = `https://api.pexels.com/v1/search?query=${query}`;
    const URL3 = 'https://api.pexels.com/v1/curated?';
    const URL4 = 'https://api.pexels.com/v1/search?';

    const MainUrl = process.env.REACT_APP_API_KEY ? URL2 : URL;

    fetch(MainUrl, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      }
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setData(result.photos || []);
        // setData(result);
        setIsLoaded(true);
      })
      .catch(err => {
        setIsLoaded(true);
        console.log(err)
      })
  },[query, setData, setIsLoaded]);

  return {
    data,
    setData,
    setQuery,
    isLoaded,
  }
}

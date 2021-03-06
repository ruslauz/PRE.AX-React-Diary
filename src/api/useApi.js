import { useState, useEffect, useMemo } from 'react';

import { getData } from '.';

export const useApi = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('nature');
  const returnData = useMemo(() => ({
    data,
    setData,
    setQuery,
    isLoaded,
}), [data, isLoaded])

  useEffect(() => {
    setIsLoaded(false);

    const URL = `${process.env.REACT_APP_JSON_URL}pictures`;
    const URL2 = `${process.env.REACT_APP_API_URL}${query}&per_page=20`;
    const MainUrl =  process.env.REACT_APP_API_KEY ? URL2 : URL;
    console.log(MainUrl);
    getData(MainUrl, { Authorization: process.env.REACT_APP_API_KEY })
      .then(result => {
        setData(result.photos || []);
        setIsLoaded(true);
      })
      .catch(err => {
        setIsLoaded(true);
        console.log(err)
      })
  },[query, setData, setIsLoaded]);

  return returnData;
}

import { useState, useEffect } from 'react';

import { getData, postData }  from '.';

export const useDb = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const saveRecord = body => {
    postData(body)
      .then(result =>{
        console.log(result)
        setData(prev => prev.concat(result))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getData()
      .then(result => {
        // console.log(result);
        setData(result);
        setIsLoaded(true);
      })
      .catch(err => console.log(err))
  },[]);

  return {
    data,
    saveRecord,
    isLoaded,
  }
}

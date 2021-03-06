import { useState, useEffect, useCallback } from 'react';

import { getData, postData }  from '../api';

const URL = `${process.env.REACT_APP_JSON_URL}records/`;

export const useApp = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [emotion, setEmotion] = useState('');
  const [title, setTitle] = useState('');

  const filterData = useCallback(({ emotion = '', title = '' } = {}) => {
    setFilteredData(() =>  data.filter(note =>  (
      note.mood.includes(emotion) && note.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())))
    )
  }, [setFilteredData, data])

  const onEmotion = useCallback((e) => {
    const emotion = e.target.value
    setEmotion(emotion);
    filterData({emotion});
  }, [setEmotion, filterData]) 

  const onTitle = useCallback((e) => {
    const title = e.target.value.trimStart();
    setTitle(title);
    filterData({title});
  }, [setTitle, filterData])

  const saveRecord = body => {
    console.log(URL);
    postData(URL, body)
      .then(result =>{
        console.log(result);
        setFilteredData(prev => prev.concat(result))
      })
      .catch(err => console.log(err))
  };

  useEffect(() => {
    console.log(URL);
    getData(URL)
      .then(result => {
        console.log(result);
        setData(result);
        setFilteredData(result)
        setIsLoaded(true);
      })
      .catch(err => console.log(err))
  },[]);

  return {
    filteredData,
    setFilteredData,
    saveRecord,
    isLoaded,
    emotion, onEmotion, setEmotion,
    title, onTitle,
  }
}

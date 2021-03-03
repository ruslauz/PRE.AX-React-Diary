import { useState } from 'react';


export const useFilters = () => {
  const [emotion, setEmotion] = useState('');
  const [title, setTitle] = useState('');

  const onEmotion = (e) => {
    setEmotion(e.target.value);
  } 

  const onTitle = (e) => {
    const value = e.target.value.trimStart();
    setTitle(value);
  }

  return {
    emotion, setEmotion, onEmotion,
    title, onTitle,
  }
};

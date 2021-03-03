import { useState } from 'react';

export const useFormData = () => {
  const [mood, setMood] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  // const [imgSrc, setImgSrc] = useState('');

  const onTitle = e => {
    setTitle(e.target.value.trimStart());
  }

  const onDate = e => {
    setDate(e.target.value);
  }

  const onDescription = e => {
    setDescription(e.target.value.trimStart());
  }

  const resetFormData = () => {
    setMood('');
    setTitle('');
    setDate('');
    setDescription('');
    /* setImgSrc(''); */
  }

  return {
    /* imgSrc, setImgSrc, */
    mood, setMood,
    title, onTitle,
    date, onDate,
    description, onDescription, resetFormData,
  }
}

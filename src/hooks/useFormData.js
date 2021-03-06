import { useCallback, useState } from 'react';

export const useFormData = () => {
  const [mood, setMood] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const onTitle = e => {
    setTitle(e.target.value.trimStart());
  }

  const onDate = e => {
    setDate(e.target.value);
  }

  const onMood = useCallback((e) => {
    const emotion = e.target.value
    setMood(emotion);
  }, []) 

  const onDescription = e => {
    setDescription(e.target.value.trimStart());
  }

  const resetFormData = () => {
    setMood('');
    setTitle('');
    setDate('');
    setDescription('');
  }

  return {
    mood, onMood,
    title, onTitle,
    date, onDate,
    description, onDescription, resetFormData,
  }
}

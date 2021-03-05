import React, { memo, useCallback, useState } from 'react';
import { Button } from '../Button';
import { EmotionSelector } from '../EmotionSelector';

import styles from './styles.module.css';
import cn from 'classnames';

import {ReactComponent as Add} from '../../assets/img/button-icons/add.svg'

import { useFormData } from '../../hooks/useFormData';


export const AddNoteForm = memo(({ img, setAddNote, saveRecord, setImgValid, setSelectImgValid }) => {

  const [moodValid, setMoodValid] = useState(true);
  const [titleValid, setTitleValid] = useState(true);
  const [dateValid, setDateValid] = useState(true);
  const [descrValid, setDescrValid] = useState(true);
  const {
    mood, setMood,
    title, onTitle,
    date, onDate,
    description, onDescription,
    resetFormData} = useFormData();
  
  const onBlur = useCallback((callback) =>  () => callback(true), []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (title && description && date && mood && img) {
      saveRecord({ title, description, date, mood,  img });
      setAddNote(false);
      resetFormData(); 
    } else {
      (!title && setTitleValid(false) ) 
      || (!description && setDescrValid(false)) 
      || (!date && setDateValid(false)) 
      || (!mood && setMoodValid(false)) 
      || (!img && (setImgValid(false) || setSelectImgValid(false)))
    }
  };

  return (
    <form action="" onSubmit={onSubmit} className={styles.form}>
      <div className={styles.formItem}>
        <input
          type="text"
          className={titleValid ? styles.input : cn(styles.input, styles.invalid)}
          placeholder='Название'
          value={title}
          onChange={onTitle} 
          onBlur={onBlur(setTitleValid)}/>
        <EmotionSelector emotionValue={mood} onChangeEmotion={setMood} valid={moodValid} onBlur={onBlur(setMoodValid)} />
        <input
          type="date"
          className={dateValid ? cn(styles.input, styles.inputDate) : cn(styles.input, styles.inputDate, styles.invalid)}
          placeholder='Дата'
          value={date}
          onChange={onDate} 
          onBlur={onBlur(setDateValid)}/>
      </div>
      <textarea
        name="" 
        className={descrValid ? styles.textarea : cn(styles.textarea, styles.invalid)}
        placeholder='Описание'
        value={description}
        onChange={onDescription} 
        onBlur={onBlur(setDescrValid)} />
      <div className={styles.formButton}>
        <Button
          title='Создать'
          background='linear-gradient(135deg, #61B15A 0%, #ADCE74 100%)'
          color='#fff'type='submit'>
          <Add />
        </Button>
      </div>
    </form>
  )
});

AddNoteForm.displayName = 'AddNoteForm';

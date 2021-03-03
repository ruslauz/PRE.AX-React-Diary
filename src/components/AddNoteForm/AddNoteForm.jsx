import React, { useState } from 'react';
import { Button } from '../Button';
import { EmotionSelector } from '../EmotionSelector';

import styles from './styles.module.css';

import {ReactComponent as Add} from '../../assets/img/button-icons/add.svg'

import { useFormData } from '../../hooks/useFormData';


export const AddNoteForm = ({ img, setAddNote, saveRecord }) => {

  const {
    mood, setMood,
    title, onTitle,
    date, onDate,
    description, onDescription,
    resetFormData} = useFormData();

  const onSubmit = e => {
    e.preventDefault();
    if (title && description && date && mood && img) {
        const body = {
        title,
        description,
        date,
        mood,
        img
        }
        console.log(body);
        // setRecords(records => {
        //     const newRecords = records.concat([body]);
        //     window.localStorage.setItem('records', JSON.stringify(newRecords));
        //     return newRecords;
        // });
        saveRecord(body);
        setAddNote(false);
        resetFormData(); 
        // setSelected(false);
    } else {
        console.log(`Заполните поле ${ (!title && 'Название' )|| (!description && 'Описание') || (!date && 'Дата') || (!mood && 'Настроение') || (!img && 'Картинка') }`)
    }
  }

  return (
    <>
      <form action="" onSubmit={onSubmit} className={styles.form}>
        <div className={styles.formItem}>
          <input
            type="text"
            className={styles.input}
            placeholder='Название'
            value={title}
            onChange={onTitle} />
          <EmotionSelector emotionValue={mood} onChangeEmotion={setMood} />
          <input
            type="date"
            className={`${styles.input} ${styles.inputDate}`}
            placeholder='Дата'
            value={date}
            onChange={onDate} />
        </div>
        <textarea
          name="" 
          className={styles.textarea}
          placeholder='Описание'
          value={description}
          onChange={onDescription} />
        <div className={styles.formButton}>
          <Button
            title='Создать'
            background='linear-gradient(135deg, #61B15A 0%, #ADCE74 100%)'
            color='#fff'type='submit'>
            <Add />
          </Button>
        </div>
      </form>
    </>
  )
};
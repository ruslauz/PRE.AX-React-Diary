import React, { useState } from 'react';
import { Button } from '../../Button';
import { EmotionSelector } from '../../EmotionSelector';

import styles from './styles.module.css';
import {ReactComponent as Add} from '../../../assets/img/button-icons/add.svg'


export const AddNoteForm = () => {
  const onSubmit = e => {
    e.preventDefault();
  }

  return (
    <>
      <form action="" onSubmit={onSubmit} className={styles.form}>
        <div className={styles.formItem}>
          <input type="text" className={styles.input} placeholder='Название'/>
          <EmotionSelector />
          <input type="text" className={`${styles.input} ${styles.inputDate}`} placeholder='Дата'/>
        </div>
        <textarea name=""  className={styles.textarea} placeholder='Описание'></textarea>
        <div className={styles.formButton}>
          <Button title='Создать' background='linear-gradient(135deg, #61B15A 0%, #ADCE74 100%)' color='#fff'type='submit'>
            <Add />
          </Button>
        </div>
      </form>
    </>
  )
};
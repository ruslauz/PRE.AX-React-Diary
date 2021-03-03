import React from 'react';

import { EmotionSelector } from '../EmotionSelector';

import styles from './styles.module.css';

export const FilterBar = ({ emotion, setEmotion, title, onTitle }) => {

  // const onTextInput = e => {
  //   onChangeText(e.target.value.trimStart());
  // }
  return (
    <div className={styles.filter}>
      <input
        type="text"
        className={styles.input}
        placeholder='Поиск'
        onChange={onTitle}
        value={title}/>
      <EmotionSelector onChangeEmotion={setEmotion} emotionValue={emotion}/>
    </div>
  )
};

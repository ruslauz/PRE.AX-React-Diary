import React from 'react';

import { EmotionSelector } from '../EmotionSelector';

import styles from './styles.module.css';

export const FilterBar = ({ onChangeText, onChangeEmotion, textValue, emotionValue }) => {

  const onTextInput = e => {
    onChangeText(e.target.value.trimStart());
  }
  return (
    <div className={styles.filter}>
      <input
        type="text"
        className={styles.input}
        placeholder='Поиск'
        onChange={onTextInput}
        value={textValue}/>
      <EmotionSelector onChangeEmotion={onChangeEmotion} emotionValue={emotionValue}/>
    </div>
  )
};

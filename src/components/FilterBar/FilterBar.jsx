import React, { memo } from 'react';

import { EmotionSelector } from '../EmotionSelector';

import styles from './styles.module.css';

export const FilterBar = memo(({ emotion, onEmotion, title, onTitle }) => {

  return (
    <div className={styles.filter}>
      <input
        type="text"
        className={styles.input}
        placeholder='Поиск'
        onChange={onTitle}
        value={title}/>
      <EmotionSelector onChangeEmotion={onEmotion} emotionValue={emotion}/>
    </div>
  )
});

FilterBar.displayName = 'FilterBar';

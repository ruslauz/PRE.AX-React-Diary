import React from 'react';

import styles from './styles.module.css';

export const EmotionSelector = ({ onChangeEmotion, emotionValue }) => {
  const EMOJIES = ['😵️', '🙃', '😑', '🤔', '🤤', '😇', '🤤', '😰', '😌', '😆', '😀']
  const onChange = e => onChangeEmotion(e.target.value);

  return (
    <>
      <div className={styles.selectWrap}>
        <select onChange={onChange} className={styles.select} value={emotionValue}>
          <option value=""></option>
          {EMOJIES.map((emoji, index) => <option key={index} value={emoji} className={styles.option}>{emoji}</option>)}
        </select>
        {
          !emotionValue
          ? <i className={`${styles.icon} far fa-laugh`}></i>
          : null
        }
      </div>
    </>
  )
};
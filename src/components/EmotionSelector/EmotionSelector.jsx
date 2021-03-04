import React from 'react';

import styles from './styles.module.css';
import cn from 'classnames';

export const EmotionSelector = ({ onChangeEmotion, emotionValue, valid = true, onBlur}) => {
  const EMOJIES = ['😵️', '🙃', '😑', '🤔', '🤤', '😇', '🤤', '😰', '😌', '😆', '😀']
  const onChange = e => onChangeEmotion(e.target.value);

  return (
    <>
      <div className={styles.selectWrap}>
        <select onChange={onChange} className={ valid ? styles.select : cn(styles.select, styles.invalid)} value={emotionValue} onBlur={onBlur}>
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
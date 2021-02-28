import React from 'react';

import styles from './styles.module.css';

export const Card = ({ title, date, text, img, emotion, data, onClick }) => {
  const onCardClick = () => onClick(data);

  return (
    <>
      <div className={styles.card} onClick={onCardClick}>
        <div className={styles.imageWrap}>
          <img src={img} alt={title} className={styles.img}/>
        </div>
        <div className={styles.footer}>
          <div className={styles.heading}>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.date}>{date}</span>
          </div>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.emotion}>
          {emotion}
        </div>
      </div>
    </>
  )
};

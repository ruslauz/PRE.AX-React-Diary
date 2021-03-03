import React from 'react';

import styles from './styles.module.css';

export const Card = ({ title, date, description, img, mood, onClick }) => {
  const onCardClick = () => onClick({ title, date, description, img, mood });
  const cardDate = new Date(date).toLocaleString('ru-RU', {
      day: 'numeric',
      month: 'short'
  }).replace('.', '');

  return (
    <>
      <div className={styles.card} onClick={onCardClick}>
        <div className={styles.imageWrap}>
          <img src={img} alt={title} className={styles.img}/>
        </div>
        <div className={styles.footer}>
          <div className={styles.heading}>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.date}>{cardDate}</span>
          </div>
          <p className={styles.text}>{description}</p>
        </div>
        <div className={styles.emotion}>
          {mood}
        </div>
      </div>
    </>
  )
};

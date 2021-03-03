import React from 'react';

import {ReactComponent as Cross} from '../../assets/img/modal/close.svg'

import styles from './styles.module.css';

export const Modal = ({ onClose, data }) => {
  const { title, date, description, img, mood } = data;

  const modalDate = new Date(date).toLocaleString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
  }).replace('г.', 'года');

  const onModal = (e) => {
    e.stopPropagation();
  };
  
  return (
    <>
      <div className={styles.layer} onClick={onClose}>
        <div className={styles.modal} onClick={onModal}>
          <button className={styles.close} onClick={onClose}><Cross /></button>
          <div className={styles.content}>
            <div className={styles.header}>
              <span className={styles.emotion}>{mood}</span>
              <span className={styles.title}>{title}</span>
              <span className={styles.date}>{modalDate}</span>
            </div>
            <div className={styles.body}>
              <img src={img} alt="Фото" className={styles.img}/>
              <div className={styles.text}>{description}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
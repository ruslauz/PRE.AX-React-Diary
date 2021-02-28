import React from 'react';

import {ReactComponent as Cross} from '../../assets/img/modal/close.svg'

import styles from './styles.module.css';

export const Modal = ({ title, date, text, img, emotion, onClose, data  }) => {
  // const { title, date, text, img, emotion } = data;
  console.log(img);
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
              <span className={styles.emotion}>{emotion}</span>
              <span className={styles.title}>{title}</span>
              <span className={styles.date}>{date}</span>
            </div>
            <div className={styles.body}>
              <img src={img} alt="Фото" className={styles.img}/>
              <div className={styles.text}>{`${text}`}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
import React from 'react';

import styles from './styles.module.css';

export const Button = ({ children, title, background, color, onClick=() => {}, ...rest}) => {
  return (
    <>
      <button style={{ background: background, color: color }} className={styles.button} onClick={onClick} {...rest}>
        {children}
        <span className={styles.title}>{title}</span>
      </button>
    </>
  )
};

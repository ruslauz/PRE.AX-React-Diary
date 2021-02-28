import React from 'react';

import styles from './styles.module.css';

export const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      {children}
    </header>
  )
};

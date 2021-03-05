import React, { memo } from 'react';

import styles from './styles.module.css';
import icon from '../../assets/img/header/logo/icon.svg';

export const HeaderLogo = memo(({ title }) => {
  return (
    <div className={styles.logo}>
      <div className={styles.icon}>
        <img src={icon} alt={title}/>
      </div>
      <h1 className={styles.text}>{title}</h1>
    </div>
  )
});

HeaderLogo.displayName = 'HeaderLogo';

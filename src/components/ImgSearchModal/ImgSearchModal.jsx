import React, { useState } from 'react';

import {ReactComponent as Search} from '../../assets/img/button-icons/search.svg';

import styles from './styles.module.css';

import { useApi } from '../../api/useApi';

export const ImgSearchModal = ({ onClose, onPictureSelect }) => {
  const [query, setQuery] = useState('');
  const { data, isLoaded } = useApi(query);

  const onChangeQuery = (e) => {
    setQuery(e.target.value.trimStart());
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onModal = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className={styles.layer} onClick={onClose}>
        <div className={styles.modal} onClick={onModal}>
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.pictureSelect}>
                <form action="" className={styles.form} onSubmit={onSubmit}>
                  <input type="text" className={styles.input} placeholder='Поиск' onChange={onChangeQuery} value={query}/>
                  <button className={styles.search}><Search/></button>
                </form>
              </div>
            </div>
            <div className={styles.body}>
              <div className={styles.results}>
                {
                  isLoaded && data
                    ? data.map(item => {
                      // const { src: {tiny, small, medium, large, original} } = item
                      const { src: { medium, large } } = item
                        return <img src={medium}
                          alt=""
                          className={styles.resultImg}
                          key={item.id}
                          onClick={() => onPictureSelect(large)}/>
                    })
                    : <div>...Data Is Loading</div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
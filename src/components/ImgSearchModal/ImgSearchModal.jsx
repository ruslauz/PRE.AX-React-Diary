import React from 'react';

import {ReactComponent as Search} from '../../assets/img/button-icons/search.svg';

import styles from './styles.module.css';


export const ImgSearchModal = ({ onClose, onPictureSelect, useSearchData }) => {

  const { 
    data,
    isLoaded,
    searchText,
    onSearchInput,
    onSearchStart } = useSearchData;

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
          <div className={styles.header}>
            <div className={styles.pictureSelect}>
              <form action="" className={styles.form} onSubmit={onSubmit}>
                <input type="text" className={styles.input} placeholder='Поиск' onChange={onSearchInput} value={searchText}/>
                <button className={styles.search} onClick={onSearchStart}><Search/></button>
              </form>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.body}>
              <div className={styles.results}>
                {
                  isLoaded && !!data.length && data.map(item => {
                      const { src: { medium, large } } = item
                        return <img src={medium}
                          alt=""
                          className={styles.resultImg}
                          key={item.id}
                          onClick={() => onPictureSelect(large)}/>
                    })
                }
                {
                  isLoaded && !(data.length) && <h3 className={styles.message}>Ничего не найдено по данному запросу</h3>
                }
                {
                  !isLoaded && <h3 className={styles.message}>Загрузка...</h3>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
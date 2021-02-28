import React, { useEffect, useState } from 'react';

import {ReactComponent as Search} from '../../assets/img/button-icons/search.svg';
import {ReactComponent as Check} from '../../assets/img/button-icons/check.svg';

import styles from './styles.module.css';

import { useApi } from '../../api/useApi';

export const SearchPicture = ({ onPictureSelect }) => {
  const [query, setQuery] = useState('');
  const { data, setData, isLoaded,} = useApi();
  const [selectedId, setSelectedId] = useState(null);

  const onChangeQuery = (e) => {
    setQuery(e.target.value.trimStart());
  }

  const onImageClick = (src, id) => (e) => {
    onPictureSelect(src);
    setSelectedId(id);
  }

  const onSubmit = e => {
    e.preventDefault();
  }

  useEffect(() => {
    if (selectedId) {
      setData(data => {
        return data.map(item => {
          item.selected = item.id === selectedId;
          return item
        });
      })
    }
  }, [selectedId, setData])

  return (
    <>
      <div className={styles.pictureSelect}>
        <form action="" className={styles.form} onSubmit={onSubmit}>
          <input type="text" className={styles.input} placeholder='Поиск' value={query} onChange={onChangeQuery}/>
          <button className={styles.search}><Search/></button>
        </form>
        <div className={styles.results}>
          {
            isLoaded && data
              ? (
                <>
                  <div className={styles.left}>
                    {
                      data.slice(0, Math.floor(data.length / 2)).map(item => {
                        const { src: { large }, id, selected } = item
                        return (
                          <div className={styles.imgWrap} key={id}>
                            <img
                              src={large}
                              alt="Фото"
                              className={styles.resultImg}
                              onClick={onImageClick(large, id)}/>
                            {
                              selected ? <div className={styles.selected}><Check/></div> : null
                            }
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className={styles.right}>
                    {
                      data.slice(Math.floor(data.length / 2)).map(item => {
                        const { src: { large }, id, selected } = item
                        return (
                          <div className={styles.imgWrap} key={id}>
                            <img
                              src={large}
                              alt="Фото"
                              className={styles.resultImg}
                              onClick={onImageClick(large, id)}/>
                            {
                              selected ? <div className={styles.selected}><Check/></div> : null
                            }
                          </div>
                        )
                      })
                    }
                  </div>
                </>
                )
            : <div>...Data Is Loading</div>
          }
        </div>
      </div>
    </>
  )
};
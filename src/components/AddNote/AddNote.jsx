import React, { memo, useCallback, useState } from 'react';
import cn from 'classnames';

import { AddNoteForm } from '../AddNoteForm/AddNoteForm';
import { SearchPicture } from '../SearchPicture';
import { ImgSearchModal } from '../ImgSearchModal/ImgSearchModal';
import { useSearch } from '../../hooks/useSearch';
import { ReactComponent as BlankImg } from '../../assets/img/button-icons/image.svg';

import styles from './styles.module.css';

export const AddNote = memo(({ setAddNote, saveRecord }) => {
  const useSearchData = useSearch();
  const [selected, setSelected] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const [selectImgValid, setSelectImgValid] =useState(true);
  const [imgValid, setImgValid] = useState(true);
  const [modal, setModal] = useState(false);

  const onModalOpen = useCallback(() => {
    setModal(true)
  }, [])

  const onModalClose = useCallback(() => {
    setModal(false)
  }, []);

  const onPictureSelect = useCallback((value) => {
    setSelected(true);
    setImgSrc(value);
    setModal(false)
  }, []);
  
  return (
    <>
      <main>
        <div className={styles.addNote}>
          <div className={selectImgValid ? styles.selectImg : cn(styles.selectImg, styles.invalid)} onClick={onModalOpen}>
            <div className={styles.imgWrap}>
              {
                selected 
                  ? <img src={imgSrc} alt="Фото" className={styles.selectedImg}/>
                  : <BlankImg />
              }
            </div>
          </div>
          <AddNoteForm
            img={imgSrc}
            setAddNote={setAddNote}
            saveRecord={saveRecord}
            setImgValid={setImgValid}
            setSelectImgValid={setSelectImgValid} />
          <SearchPicture
            onPictureSelect={setImgSrc}
            useSearchData={useSearchData} 
            valid={imgValid}
            setImgValid={setImgValid} />
          {
            modal && <ImgSearchModal
              onClose={onModalClose}
              onPictureSelect={onPictureSelect}
              useSearchData={useSearchData}
              selectedImgSrc={imgSrc}
              setSelectImgValid={setSelectImgValid} />
          }
        </div>
      </main>
    </>
  )
});

AddNote.displayName = 'AddNote';

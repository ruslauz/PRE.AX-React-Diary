import React, { useState } from 'react';

import { Main } from '../Main';
import { AddNoteForm } from '../AddNoteForm/AddNoteForm.jsx/AddNoteForm';
import { SearchPicture } from '../SearchPicture';
import { ReactComponent as BlankImg } from '../../assets/img/button-icons/image.svg';


import styles from './styles.module.css';
import { ImgSearchModal } from '../ImgSearchModal/ImgSearchModal';

export const AddNote = () => {
  const [selected, setSelected] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const [modal, setModal] = useState(false);

  const onModalOpen = (e) => {
    setModal(true)
  }

  const onModalClose = (e) => {
    setModal(false)
  }

  const onPictureSelect = (value) => {
    setSelected(true);
    setImgSrc(value);
    onModalClose();
  }
  
  return (
    <>
      <Main>
        <div className={styles.addNote}>
          <div className={styles.selectImg} onClick={onModalOpen}>
            <div className={styles.imgWrap}>
              {
                selected 
                  ? <img src={imgSrc} alt="Фото" className={styles.selectedImg}/>
                  : <BlankImg />
              }
            </div>
          </div>
          <AddNoteForm />
          <SearchPicture onPictureSelect={setImgSrc}/>
          {
            modal && <ImgSearchModal onClose={onModalClose} onPictureSelect={onPictureSelect}/>
          }
        </div>
      </Main>
    </>
  )
};
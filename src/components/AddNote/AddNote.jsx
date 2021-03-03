import React, { useState } from 'react';

import { Main } from '../Main';
import { AddNoteForm } from '../AddNoteForm/AddNoteForm';
import { SearchPicture } from '../SearchPicture';
import { ImgSearchModal } from '../ImgSearchModal/ImgSearchModal';
import { useSearch } from '../../hooks/useSearch';
import { ReactComponent as BlankImg } from '../../assets/img/button-icons/image.svg';

import styles from './styles.module.css';

export const AddNote = ({ setAddNote, saveRecord }) => {
  const useSearchData = useSearch();

  const [selected, setSelected] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
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
          <AddNoteForm img={imgSrc} setAddNote={setAddNote} saveRecord={saveRecord} />
          <SearchPicture onPictureSelect={setImgSrc} useSearchData={useSearchData}/>
          {
            modal && <ImgSearchModal onClose={onModalClose} onPictureSelect={onPictureSelect} useSearchData={useSearchData}/>
          }
        </div>
      </Main>
    </>
  )
};
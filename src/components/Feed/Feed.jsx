import { useCallback, useState } from 'react';

import { Main } from '../Main';
import { Card } from '../Card/Card';
import { Modal } from '../Modal';

import styles from './styles.module.css';

import { useDb } from '../../api/useDb';

export const Feed = ({ filterText, filterEmotion }) => {

  const  { data, isLoaded } = useDb();

  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const onModalClose = useCallback(() => setModal(false), [setModal]);
  const onModalOpen = useCallback((data) => {
    setModalData(data);
    setModal(true);
  }, [setModal, setModalData]);

  return (
    <>
      <Main>
        <div className={styles.cards}>
          {
            isLoaded && data
            ? data.map(dat => {
              // const { src: {tiny, small, medium, large, original} } = dat
              // console.log(dat);
              const { id, img, title, date, text, emotion } = dat
              return <Card
                key={id}
                data={dat}
                onClick={onModalOpen}
                img={img}
                title={title}
                date={date}
                text={text}
                emotion={emotion}/>
            })
            : <div>...Data Is Loading</div>
          }
        </div>
        {
          modal && modalData
          ? <Modal
              data={modalData}
              onClose={onModalClose}/>
          : null
        }
      </Main>
    </>
  )
};
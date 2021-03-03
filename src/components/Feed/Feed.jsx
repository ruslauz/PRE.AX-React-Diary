import { useCallback, useState } from 'react';

import { Main } from '../Main';
import { Card } from '../Card/Card';
import { Modal } from '../Modal';

import styles from './styles.module.css';

export const Feed = ({ data, isLoaded }) => {

  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const onModalClose = useCallback(() => setModal(false), [setModal]);
  const onModalOpen = useCallback(data => {
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
              const { id, img, title, date, description, mood } = dat
              return <Card
                key={id}
                data={dat}
                onClick={onModalOpen}
                img={img}
                title={title}
                date={date}
                description={description}
                mood={mood}/>
            })
            : <div>...Data Is Loading</div>
          }
          {
            // [...new Array(4).keys()].map((i) => <div key={i} className='mask'></div>)
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
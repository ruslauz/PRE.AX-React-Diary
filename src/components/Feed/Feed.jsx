import { memo, useCallback, useState } from 'react';

import { Card } from '../Card/Card';
import { Modal } from '../Modal';

import styles from './styles.module.css';

export const Feed = memo(({ data, isLoaded }) => {

  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const onModalClose = useCallback(() => setModal(false), [setModal]);
  const onModalOpen = useCallback(data => {
    setModalData(data);
    setModal(true);
  }, [setModal, setModalData]);

  return (
    <>
      <main>
        {
          isLoaded && !data.length && <h3 className={styles.message}>Список записей пуст</h3>
        }
        {
          !isLoaded && <h3 className={styles.message}>Записи загружаются...</h3>
        }
        <div className={styles.cards}>
          {
            isLoaded && data && data.map(dat => {
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
          }
        </div>
        {
          modal && modalData
          ? <Modal
              data={modalData}
              onClose={onModalClose}/>
          : null
        }
      </main>
    </>
  )
});

Feed.displayName = 'Feed';

import { lazy, memo, Suspense, useState } from 'react';

import styles from './App.module.css';

import { Header } from '../Header';
import { useApp } from '../../hooks/useApp';
import { Feed } from '../Feed';

const AddNote = lazy(() => import('../AddNote'));

export const App = memo(() => {
  const  {  
    filteredData,
    saveRecord,
    isLoaded,
    emotion, onEmotion,
    title, onTitle,
} = useApp();

  const [addNote, setAddNote] = useState(false);

  return (
    <div className={styles.app}>
      <Header
        addNote={addNote}
        setAddNote={setAddNote}
        title={title}
        emotion={emotion}
        onTitle={onTitle}
        onEmotion={onEmotion}/>
      {
        addNote
          ? <Suspense fallback={<h3>Идет загрузка...</h3>}>
              <AddNote setAddNote={setAddNote} saveRecord={saveRecord} />
            </Suspense>
          :<Feed
            data={filteredData}
            isLoaded={isLoaded}/>
      }
    </div>
  );
});

App.displayName = 'App';

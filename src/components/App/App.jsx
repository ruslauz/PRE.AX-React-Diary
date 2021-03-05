import { memo, useState } from 'react';

import { Header } from '../Header';
import { AddNote } from '../AddNote';
import { Feed } from '../Feed/Feed';

import styles from './App.module.css';

import { useApp } from '../../hooks/useApp';

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
          ? <AddNote setAddNote={setAddNote} saveRecord={saveRecord} />
          : <Feed
              data={filteredData}
              isLoaded={isLoaded}/>
      }
    </div>
  );
});

App.displayName = 'App';

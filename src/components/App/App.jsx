import { useEffect, useState } from 'react';

import { Header } from '../Header';
import { AddNote } from '../AddNote';
import { Feed } from '../Feed/Feed';

import styles from './App.module.css';

import { useDb } from '../../api/useDb';
import { useFilters } from '../../hooks/useFilters';

export const App = () => {
  const  { data, isLoaded, saveRecord } = useDb();
  const {
    emotion, setEmotion,
    title, onTitle 
  } = useFilters();

  const [filteredData, setFilteredData] = useState(data);
  const [addNote, setAddNote] = useState(false);

  useEffect(() => {
    if (data) {
      setFilteredData(() => {
        return  data.filter(note => {
          return note.mood.includes(emotion) && note.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
        })
      })
    }
  }, [emotion, title, data, setFilteredData])


  return (
    <div className={styles.app}>
      <Header
        addNote={addNote}
        setAddNote={setAddNote}
        title={title}
        emotion={emotion}
        onTitle={onTitle}
        setEmotion={setEmotion}/>
      {
        addNote
          ? <AddNote setAddNote={setAddNote} saveRecord={saveRecord} />
          : <Feed
              data={filteredData}
              isLoaded={isLoaded}/>
      }
    </div>
  );
};

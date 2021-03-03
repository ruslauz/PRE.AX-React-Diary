import React from 'react';

import { Button } from '../Button';
import { FilterBar } from '../FilterBar';
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';

import {ReactComponent as Pen} from '../../assets/img/button-icons/pen.svg';
import {ReactComponent as Grid} from '../../assets/img/button-icons/display-grid.svg';

import styles from './styles.module.css';

export const Header = ({
  addNote,
  setAddNote,
  emotion, setEmotion,
  title, onTitle }) => {
  
    const onAddNote = () => setAddNote(true);
    const onList = () => setAddNote(false);


    return (
      <header className={styles.header}>
        <HeaderLogo title='Дневник'/>
          {
            !addNote && (
              <FilterBar
                title={title}
                emotion={emotion}
                onTitle={onTitle}
                setEmotion={setEmotion}/>
              )
          }
          <div className={styles.buttons}>
            <Button title='Список' background='#FFCE89' onClick={onList}>
              <Grid />
            </Button>
            <Button title='Запись' background='linear-gradient(135deg, #61B15A 0%, #ADCE74 100%)' color='#fff'
            onClick={onAddNote}>
              <Pen />
            </Button>
          </div>
      </header>
    )
};

import { useState } from 'react';

import { Header } from '../Header';
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';
import { FilterBar } from '../FilterBar';
import { Button } from '../Button';

import {ReactComponent as Pen} from '../../assets/img/button-icons/pen.svg';
import {ReactComponent as Grid} from '../../assets/img/button-icons/display-grid.svg';


import styles from './App.module.css';
import { AddNote } from '../AddNote';
import { Feed } from '../Feed/Feed';

export const App = () => {
  const [addNote, setAddNote] = useState(false);
  const [textFilter, setTextFilter] = useState('');
  const [emotionFilter, setEmotionFilter] = useState('');
  const onAddNote = () => setAddNote(prev => !prev)

  return (
    <div className={styles.app}>
      <Header>
        <HeaderLogo title='Дневник'/>
        {
          !addNote && (
            <FilterBar
              textValue={textFilter}
              emotionValue={emotionFilter}
              onChangeText={setTextFilter}
              onChangeEmotion={setEmotionFilter}/>
            )
        }
        <div className={styles.buttons}>
          <Button title='Список' background='#FFCE89'>
            <Grid />
          </Button>
          <Button title='Запись' background='linear-gradient(135deg, #61B15A 0%, #ADCE74 100%)' color='#fff'
          onClick={onAddNote}>
            <Pen />
          </Button>
        </div>
      </Header>
      {
        addNote
          ? <AddNote />
          : <Feed
              filterText={textFilter}
              filterEmotion={emotionFilter}
              />
      }
    </div>
  );
}

export default App;

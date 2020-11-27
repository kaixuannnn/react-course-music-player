import React, {useState, useRef} from 'react';
// import './styles/app.scss';
import s from './styles/App.module.css';
import Player from './components/Player';
import Song from './components/Song';
import data from './data';
import Library from './components/Library';


function App() {
  //Ref
  
  
  //State 
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);



  return (
    <div className={s.App}>
      <Song currentSong={currentSong}/>
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}/> 
      <Library songs={songs} setCurrentSong={setCurrentSong}/>
      

    </div>
  );
}

export default App;

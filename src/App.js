import React, {useState, useRef} from 'react';
import './styles/app.scss';
// import s from './styles/App.module.css';
import Player from './components/Player';
import Song from './components/Song';
import data from './data';
import Library from './components/Library';
import Nav from './components/Nav';


function App() {
  //Ref
  const audioRef = useRef(null);
  
  //State 
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHandler =(e) =>{
    //update the time that passing
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //calculate Percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round((roundedCurrent / roundedDuration)*100); 
    setSongInfo({...songInfo, currentTime: current, duration, animationPercentage})
  }


  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} setCurrentSong={setCurrentSong} setSongInfo={setSongInfo} songInfo={songInfo} songs={songs} setSongs={setSongs}/> 
      <Library audioRef={audioRef} songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong} isPlaying={isPlaying} libraryStatus={libraryStatus}/>
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>

    </div>
  );
}

export default App;

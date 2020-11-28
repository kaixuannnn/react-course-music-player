import React from 'react';
import {playAudio} from '../utils';

const LibrarySong = ({songs,song,setCurrentSong,audioRef, isPlaying, setSongs}) => {
    const songSelectHandler =()=>{
        setCurrentSong(song);
        // add active state
        const newSongs = songs.map((targetSong) => {
            if (targetSong.id === song.id) {
              return {
                ...targetSong,
                active: true,
              };
            } else {
              return {
                ...targetSong,
                active: false,
              };
            }
          });
          setSongs(newSongs);

        //check the song is Playing
        playAudio(isPlaying, audioRef);
    }

    return(
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img src={song.cover} alt=""></img>
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;
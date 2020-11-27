import React from 'react';
import s from '../styles/Library.module.css';


const LibrarySong = ({song,setCurrentSong,audioRef, isPlaying}) => {
    const songSelectHandler =()=>{
        setCurrentSong(song);
        //check the song is Playing
        if(isPlaying){
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined){
                playPromise.then((audio) => {
                    audioRef.current.play();
                })
            }
        }
        audioRef.current.play();
    }
    return(
        <div onClick={songSelectHandler} className={s.librarysong}>
            <img src={song.cover} alt=""></img>
            <div className={s.songdescription}>
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;
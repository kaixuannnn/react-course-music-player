import React from 'react';
import s from '../styles/Library.module.css';


const LibrarySong = ({song,setCurrentSong}) => {
    const songSelectHandler =()=>{
        setCurrentSong(song);
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
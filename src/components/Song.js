import React from 'react';
import s from '../styles/Song.module.css';

const Song = ({currentSong}) => {
    return(
        <div className={s.songcontainer}>
            <img src={currentSong.cover} alt=""></img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    );
};

export default Song;
import React from 'react';
import LibrarySong from './LibrarySong';
import s from '../styles/Library.module.css';

const Library =({songs, setCurrentSong,audioRef})=>{
    return(
        <div className={s.library}>
            <h2>Library</h2>
            <div className={s.librarysongs}>
                {songs.map(song=> 
                (<LibrarySong  
                song={song} 
                setCurrentSong={setCurrentSong} 
                key={song.id} 
                audioRef={audioRef}/>))}
            </div>
        </div>
    )
};

export default Library;
import React from 'react';
import LibrarySong from './LibrarySong';


const Library =({setSongs,songs, setCurrentSong,audioRef,isPlaying,libraryStatus})=>{
    return(
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song=> 
                (<LibrarySong  
                song={song} 
                id={song.id}
                setCurrentSong={setCurrentSong} 
                key={song.id} 
                audioRef={audioRef}
                isPlaying={isPlaying}
                songs={songs}
                setSongs={setSongs}/>))}
            </div>
        </div>
    )
};

export default Library;
import React, { useState } from 'react';
import Sound from 'react-sound';
import Music from '../Assets/music.mp3'


// Function Example from:https://dev.to/daveguz97/adding-sound-to-a-react-project-51m3 //
const GameSound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
    ) => {

        const[volume, setVolume] = useState(0);
        // const[position, setPosition] = useState(1000);

        function mute(){
            if (volume === 0) {
                setVolume(50);
            }
            else {
                setVolume(0);
            }

            let button = document.getElementById("muteButton")
    button.innerText === '🔇' ?  button.innerText = '🔈' : button.innerText = '🔇'
        }
    
        
    return (
        <div>

            {/* <button onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'Play' : 'Stop'}   {/* //think like IF ElSE Tom */}
            {/* </button> */} 
           <button id='muteButton' onClick={mute}>🔇</button>  
            <Sound
                url={Music}
                // playStatus={Sound.status.PLAYING}
                playFromPosition={400} 
                // loop={true}
                volume={volume} 
            />
        </div>

    );
}

export default GameSound;
import React, { useEffect , useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { useHistory } from "react-router-dom";

import Bar from './bar';
import Play from "./play";
import Pause from "./pause";

import useAudioPlayer from './useAudioPlayer';





import './index.css'


const AudioPlayer = ({}) => {
    const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();
	return (
    <div className = 'audioPlayerMainDiv'>
      <audio id="audio">
        <source src="./audio1.ogv" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className="controls">
      <Bar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)}/>
        {playing ? 
          <Pause handleClick={() => setPlaying(false)} /> :
          <Play handleClick={() => setPlaying(true)} />
        }
      </div>
    </div>
  )
}


export default AudioPlayer

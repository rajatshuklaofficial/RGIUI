import React from "react";


import './index.css'

export default function Play(props) {
  const { handleClick } = props;

  return (
    <div className="playButton" onClick={() => handleClick()}>
      <img src = './images/play.svg' /> <div>|</div> PLAY RECORDING
    </div>
  );
}

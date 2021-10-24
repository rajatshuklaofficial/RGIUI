import React from "react";
import { PauseCircleFilled } from "@material-ui/icons";

export default function Play(props) {
  const { handleClick } = props;
  
  return (
    <div className="playButton" onClick={() => handleClick()}>
      <img src = './images/pause.svg' /> <div>|</div> PAUSE RECORDING
    </div>
  );
}

import React, { useState } from "react";
import "../../App.css";
var interval: NodeJS.Timer | undefined;
interface OwnComponentProps {}
const OwnComponent = (props: OwnComponentProps): JSX.Element => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  //Start or stop the Stop Watch based on current value of state isRunning
  const stopWatch = () => {
    if (isRunning == false) {
      setIsRunning(true);
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else {
      setIsRunning(false);
      if (typeof interval !== "undefined") {
        clearInterval(interval);
      }
    }
  };

  //Stop the Stop Watch and reset value to 0
  const resetWatch = () => {
    setIsRunning(true);
    setSeconds(0);
    stopWatch();
  };

  return (
    <div className="boundaryown">
      <div>STOP WATCH</div>
      <div data-testid="scnds">{seconds}</div>
      <button onClick={stopWatch}>Start/Stop</button>
      <button onClick={resetWatch}>Reset</button>
    </div>
  );
};

export default OwnComponent;

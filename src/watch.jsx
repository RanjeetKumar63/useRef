import React from "react";
import { useState, useEffect, useRef } from "react";
import "./App.css";

const watch = () => {
  const [time, setTime] = useState(0);
  function startTimer() {
    setTime();
  }
  function stopTimer() {}
  function resetTimer() {}
  return (
    <div className="watch">
      <h1>StopWatch:{time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <br />
      <br />
      <button>{stopTimer} Stop</button>
      <br />
      <br />
      <button onclick={resetTimer}>Reset</button>
    </div>
  );
};

export default watch;

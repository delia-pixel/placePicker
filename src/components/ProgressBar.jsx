import React from 'react';
import { useState, useEffect } from 'react';

const TIMER = 3000;

function ProgressBar() {
  const [remainingTime, setRemainingTime] = useState(TIMER);

    useEffect(() => {
      const interval = setInterval(() => {
        setRemainingTime((prev) => prev - 10);
      }, 10);

      return () => {
        clearInterval(interval);
      };
    }, []);

  return (
    <div>
      <progress value={remainingTime} max={TIMER} />
    </div>
  );
}

export default ProgressBar

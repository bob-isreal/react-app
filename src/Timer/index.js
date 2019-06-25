import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  function tick() {
    setSeconds(previousSecond => previousSecond + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>Seconds: {seconds}</div>;
}

export { Timer, Seconds };

function Seconds(props) {
  const [seconds, setSeconds] = useState(0);

  function tick() {
    setSeconds(previousSecond => Number((previousSecond + 0.05).toFixed(3)));
  }

  useEffect(() => {
    const interval = setInterval(() => tick(), 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return props.children(seconds);
}

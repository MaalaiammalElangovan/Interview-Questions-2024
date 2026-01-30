// 1. write a custom hook useCurrentTime that returns the current time
import React, { useState, useEffect } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div>Current Time: {currentTime.toLocaleTimeString()}</div>
    </div>
  );
}

export default App;

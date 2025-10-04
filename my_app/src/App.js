import React, { useState } from 'react';

const App = () => {
  // verbose way of using useState
  const array = useState(0);
  const counter = array[0];        // current value
  const setCounter = array[1];     // updater function

  
  


  // shortcut way:
  // const [counter, setCounter] = useState(0);
//  function after click the button

  function increaseCounter() {
    setCounter(counter + 1);
  }

  console.log(array); // [counterValue, setCounterFunction]

  return (
    <div>
      {/* UseState With Input text */}
      

     
      <h1>Counter: {counter}</h1>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );
};

export default App;

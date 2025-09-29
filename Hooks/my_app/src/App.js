import React, { useState } from 'react';

const App = () => {
  // verbose way of using useState
  const array = useState(0);
  const counter = array[0];        // current value
  const setCounter = array[1];     // updater function

  // they pass in the initial value  of the state variable
  const [name, setName] = useState("")  


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
      {/* e => e.target.value = which means Take the event, grab the value of the input that changed, and return it */}
      {/* e.target.value =  to update state variable */}
      <input type="text" onChange={e => setName (e.target.value)} />
      <h1>Counter: {counter}</h1>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );
};

export default App;

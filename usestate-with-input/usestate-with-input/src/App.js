import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  return (
    <div>
      {/* useState with input Field */}
      {/* e : This is the event object automatically passed to your event handler. it like which element triggered it */}
      {/* target refers to the element that triggered the event. */}
      {/* .value property of that input element gives you the current text/value */}

      <input type='text' onChange={e => setName(e.target.value)} />
      <h1>
        {name} has clicked {counter} times!!
      </h1>
    </div>
  );
}

export default App;

import React from 'react';
import SimpleCounterComponent from './components/SimpleCounterComponent';
import PureCounterComponent from './components/PureCounterComponent';

function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <SimpleCounterComponent />
      <PureCounterComponent />
    </div>
  );
}

export default App;

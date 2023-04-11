
import './App.css';
import React from 'react';
// import Child from './components/Dataflow/Child';
import Parent from './components/Dataflow/Parent';
import UpdateState from './components/useStatePractice/UpdateState';
import { MyContextProvider } from './Context/Context';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyContextProvider>
          <Parent></Parent>
          {/* <Child></Child> */}
          <UpdateState></UpdateState>
        </MyContextProvider>
      </header>
    </div>
  );
}

export default App;

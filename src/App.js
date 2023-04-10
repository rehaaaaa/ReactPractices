import './App.css';
import Child from './components/Dataflow/Child';
import Parent from './components/Dataflow/Parent';
import UpdateState from './components/useStatePractice/UpdateState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Parent></Parent>
      {/* <Child></Child> */}
      <UpdateState></UpdateState>
      </header>
    </div>
  );
}

export default App;

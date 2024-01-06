
import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import CounterFunc from './CounterFunc';
import CounterEx1 from './StateEx1';
import CounterEx2 from './StateEx2';

function App() {
  return (
    <div className="App">
      
      <Counter />
      <hr />
      <SayFunction />
      <hr />

      <CounterFunc />
      <hr/>
      <CounterEx1 />
      <hr/>
      <CounterEx2 />
    </div>
  );
}

export default App;

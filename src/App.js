import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { useEffect, useState } from 'react';

function App() {

  const [value, updateValue] = useState(0);

  useEffect(() => {
    console.log('Hi 1');
  });

  useEffect(() => {
    console.log('Hi 2');
  }, []);

  useEffect(() => {
    console.log('Hi 3, consume an API');

  }, [value]);


  const name = "Esteban ";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter/>
      </header>
    </div>
  );
}

export default App;

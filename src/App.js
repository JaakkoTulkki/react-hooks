import React, {Component} from 'react';
import './App.css';
import {ClassBasedCounter} from "./components/classBased"
import {ComplexFunctionBased} from "./components/complexFunctionBased"
import {ReducerBased} from "./components/reducerBased"
import {granularCounter} from "./components/granularCounter"
import {SimpleFunctionBased} from "./components/simpleFunctionBased"

export const InitialValueContext = React.createContext();

function Granular() {
  const [count, {Inc}] = granularCounter();
  return (
    <>
      {count} <Inc/>
    </>
  );
}

class App extends Component {
  render() {
    return (
      <InitialValueContext.Provider value={100}>
        <div className="App">
          <header className="App-header">
            <p>
              <ClassBasedCounter/>
            </p>

            <p>
              <SimpleFunctionBased />
            </p>

            <p>
              <ReducerBased/>
            </p>

            <p>
              <ComplexFunctionBased/>
            </p>

            <p>
              <Granular/>
            </p>
          </header>
        </div>
      </InitialValueContext.Provider>
    );
  }
}

export default App;

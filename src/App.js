import {useEffect, useState} from "react"
import './App.css';
import Wordle from "./components/Wordle";

function App() {
const [solution, setSolution] = useState()

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then(res => res.json())
      .then(json => {
        const randomSolution = json[Math.floor(Math.random()*json.length)]
        setSolution(randomSolution.word)
      })
  }, [setSolution])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle</h1>
        
        {solution && <Wordle solution={solution} />}
      </header>
    </div>
  );
}

export default App;

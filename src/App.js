import './App.css';
import Sandwiches from './features/Sandwiches'
import {useState} from 'react'

function App() {
  const[sandwiches, setSandwiches] = useState([])

  return (
    <div className="App">
      <Sandwiches sandwiches={sandwiches} setSandwiches={setSandwiches} />
    </div>
  );
}

export default App;

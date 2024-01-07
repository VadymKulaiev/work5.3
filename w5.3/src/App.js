import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const increaseNumber = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log(count);
  });

  return(
    <div>
      <h2>{count}</h2>
    <button onClick={increaseNumber}>Збільшити</button>
    </div>
  )
}

export default App;

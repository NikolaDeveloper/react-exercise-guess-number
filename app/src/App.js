import { useState } from 'react'
import './App.css';
import Menu from './components/Menu'
import Start from './components/Start'

const App = () => {

  const [data, setData] = useState({
    gameState: 'menu',
    number: '',
    tries: 0,
    result: false
  });

  return (
    <div className="App">
        {data.gameState === 'menu' && <Menu data={data} setData={setData} />}
        {data.gameState === 'started' && <Start data={data} setData={setData} />}
    </div>
  );
}

export default App;

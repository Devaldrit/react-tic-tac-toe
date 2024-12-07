import { useState } from 'react';
import './App.css';

function Square() {
  const [value, setValue] = useState(null);

  const handleClick = () =>{
    setValue("X");
  }
  return <button onClick={handleClick} className="square">{value}</button>;
}

function Board() {
  return (
    <div className="App">
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default Board;

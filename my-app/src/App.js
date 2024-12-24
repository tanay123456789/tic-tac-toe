import { useState } from 'react';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App(){
  function Square({value, onSquareClick}) {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }
  
   
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
  
    function handleClick(i) {
      if (squares[i]) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = 'X';
      } else {
        nextSquares[i] = 'O';
      }
      const result=winner(nextSquares)
      
      function winner(nextSquares){
        if (nextSquares[0]==nextSquares[1]&&nextSquares[1]==nextSquares[2]&&nextSquares[0]!=null){
          console.log(nextSquares[i],"wins");
        }
        if (nextSquares[3]==nextSquares[4]&&nextSquares[3]==nextSquares[5]&& nextSquares[3]!=null){
          console.log(nextSquares[i],"wins");
        }
        if (nextSquares[6]==nextSquares[7]&&nextSquares[6]==nextSquares[8]&& nextSquares[6]!=null){
          console.log(nextSquares[i],"wins");
        }
        if (nextSquares[0]==nextSquares[3]&&nextSquares[0]==nextSquares[6]&&nextSquares[0]!=null){
          console.log(nextSquares[i],"wins");
        }
        if (nextSquares[0]==nextSquares[1]&&nextSquares[1]==nextSquares[2]&&nextSquares[0]!=null){
          console.log(nextSquares[i],"wins");
        }
        if (nextSquares[1]==nextSquares[4]&&nextSquares[1]==nextSquares[7]&&nextSquares[1]!=null){
          console.log(nextSquares[i],"wins");
        }
        if (nextSquares[2]==nextSquares[5]&&nextSquares[2]==nextSquares[8]&&nextSquares[2]!=null){
          console.log(nextSquares[i],"wins");
        }
        if (nextSquares[0]==nextSquares[4]&&nextSquares[0]==nextSquares[8]&&nextSquares[0]!=null){
          console.log(nextSquares[i],"wins");
        }
        if (nextSquares[2]==nextSquares[4]&&nextSquares[2]==nextSquares[6]&&nextSquares[2]!=null){
          console.log(nextSquares[i],"wins");
        }
        
      }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }
  
    return (
      <>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </>
    );
  }
  





export default App;
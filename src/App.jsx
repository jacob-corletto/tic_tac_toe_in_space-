import { useState } from 'react';
import Board from './components/Board';
import styles from '../styles/app.module.css'
// import explostion from '../public/explosion.mp3'
// import useSound from 'use-sound';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button className={styles.appbutton} onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className={styles.game}>
      <div className={styles.gameboard}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={styles.gameinfo}>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}


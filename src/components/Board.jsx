import { useEffect, useState } from "react";
import CalculateWinner from "./CalculateWinner";
import Square from "./Square";
import BoardStyles from '../../styles/board.module.css';
import explosion from "../assets/explosion.mp3";
import ufo from "../assets/ufo.mp3"
import useSound from 'use-sound';

export default function Board({ xIsNext, squares, onPlay }) {
  const [playexplosion] = useSound(explosion)
  const [playufo] = useSound(ufo)

  function handleClick(i) {
    if (CalculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = CalculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className={BoardStyles.status}>{status}</div>
      <div className={BoardStyles.boardrow}>
        <Square value={squares[0]} onSquareClick={() => { handleClick(0), playufo() }} />
        <Square value={squares[1]} onSquareClick={() => { handleClick(1), playexplosion() }} />
        <Square value={squares[2]} onSquareClick={() => { handleClick(2), playufo() }} />
      </div>
      <div className={BoardStyles.boardrow}>
        <Square value={squares[3]} onSquareClick={() => { handleClick(3), playexplosion() }} />
        <Square value={squares[4]} onSquareClick={() => { handleClick(4), playufo() }} />
        <Square value={squares[5]} onSquareClick={() => { handleClick(5), playexplosion() }} />
      </div>
      <div className={BoardStyles.boardrow}>
        <Square value={squares[6]} onSquareClick={() => { handleClick(6), playufo() }} />
        <Square value={squares[7]} onSquareClick={() => { handleClick(7), playexplosion() }} />
        <Square value={squares[8]} onSquareClick={() => { handleClick(8), playufo() }} />
      </div>
    </>
  );
}
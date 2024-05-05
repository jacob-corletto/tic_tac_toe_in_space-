import SquareStyles from '../../styles/square.module.css'; // Import the CSS file
import playsound, { useSound } from 'use-sound'
import explosion from '../assets/explosion.mp3'

export default function Square({ value, onSquareClick }) {
  const [playSound] = useSound(explosion)
  return (
    <button className={SquareStyles.square} onClick={onSquareClick}>
      {value}
    </button>
  );
}
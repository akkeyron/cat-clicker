import react, { useState, useRef, FC } from 'react'
import Menu from '../menu/menu';
import Start from '../menu/start';
import Win from '../menu/win';
import Lose from '../menu/lose';

// css
import './gameplay.css';

interface IProps {
  lowScore: string;
  setScreen: (screen: 'game' | 'board') => void;
}

const Gameplay: FC<IProps> = ({ lowScore, setScreen }) => {
  const [gameState, setGameState] = useState<'menu' | 'start' | 'win' | 'lose'>('menu');
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className='menu__screen'>
      {/* start game */}
      {gameState === 'menu' && <Menu setState={setGameState} setScreen={setScreen} />}

      {/* game */}
      {gameState === 'start' && <Start lowScore={lowScore} setState={setGameState} />}

      {/* win */}
      {gameState === 'win' && <Win setState={setGameState} />}

      {/* lose */}
      {gameState === 'lose' && <Lose setState={setGameState} />}
    </div>
  )
}

export default Gameplay
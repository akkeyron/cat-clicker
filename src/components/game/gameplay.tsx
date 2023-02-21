import react, { useState, useRef, FC } from 'react'
import Menu from '../menu/menu';
import Start from '../menu/start';
import Win from '../menu/win';
import Lose from '../menu/lose';

interface IProps {
  lowScore: string;
}

const Gameplay: FC<IProps> = ({ lowScore }) => {
  const [gameState, setGameState] = useState<'menu' | 'start' | 'win' | 'lose'>('menu');
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id='game'>
      <div className='w-[100vw] h-[100vh] flex flex-col content-center flex-wrap justify-center'>
        <div ref={containerRef} className='flex flex-col justify-center text-center bg-blue-200 w-[95%] h-[95%] rounded-2xl'>
          {/* start game */}
          {gameState === 'menu' && <Menu setState={setGameState} />}

          {/* game */}
          {gameState === 'start' && <Start lowScore={lowScore} setState={setGameState} />}

          {/* win */}
          {gameState === 'win' && <Win setState={setGameState} />}

          {/* lose */}
          {gameState === 'lose' && <Lose setState={setGameState} />}


        </div>
      </div>
    </section>
  )
}

export default Gameplay
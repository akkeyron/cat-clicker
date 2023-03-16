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
      <div className='h-[100dvh] flex flex-col content-center flex-wrap justify-center'>
        <div ref={containerRef} className='flex flex-col justify-center text-center bg-[#00C4E6] w-[95%] h-[90%] rounded-2xl shadow-[0px_0px_20px_2px_rgb(0_0_0_/_50%)]'>
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
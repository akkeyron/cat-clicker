import { useState, useRef, useEffect, FC } from 'react'
import Game from './components/game/gameplay';
import Board from './components/board/board';
// import Menu from './components/Menu/Menu';
// import { useQuery } from 'react-query';
// import axios from 'axios';
// import { DynamoDB } from 'aws-sdk';
import data from './data.js';
import './App.css';

// import data for testing
// import testdata from './data.js';

const api_endpoint: string = "https://g1bme0lzz2.execute-api.ap-southeast-1.amazonaws.com/dev/score";

interface IData {
  id: string;
  name: string;
  score: string
}

type ScreenState = 'game' | 'board';

const App: FC = () => {
  const [highScores, setHighScores] = useState(data);
  const [loading, setLoading] = useState<boolean>(false);
  const currentScore = useRef<string>('0');
  const tableLength = useRef<number>(0);

  // state for current screen
  const [screen, setScreen] = useState<'game' | 'board'>('game');

  // refs
  const gameRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  const toggleScreen = (input: ScreenState) => {
    const main = document.querySelector('.screen-main');
    const game = gameRef.current;
    const board = boardRef.current;

    if (!game || !board) return;

    if (input === 'game') {
      game.style.zIndex = '1';
      board.style.zIndex = '0';
      game?.classList.add('show');
      board?.classList.remove('show');
    } else {
      game.style.zIndex = '0';
      board.style.zIndex = '1';
      game?.classList.remove('show');
      board?.classList.add('show');
    }

    main?.classList.toggle('flipped');
  }



  return (
    <div className='main'>
      <div className='screen-main'>
        {/* {loading ? "" : <GamePlayer
        currentScore={currentScore.current}
      />}
      {loading ? "" : <Board
        table={highScores}
        loading={loading}
      />} */}

        {/* game */}
        <div className='screen game show' ref={gameRef}>
          <Game lowScore='0' setScreen={toggleScreen} />
        </div>

        {/* leaderboard */}
        <div className='screen board' ref={boardRef}>
          <Board table={highScores} loading={loading} setScreen={toggleScreen} />
        </div>

      </div>
    </div>

  )
}

export default App
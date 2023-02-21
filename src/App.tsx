import { useState, useRef, FC } from 'react'
import Game from './components/game/gameplay';
import Board from './components/board/board';
// import Menu from './components/Menu/Menu';
// import { useQuery } from 'react-query';
// import axios from 'axios';
// import { DynamoDB } from 'aws-sdk';
import data from './data.js'

// import data for testing
// import testdata from './data.js';

const api_endpoint: string = "https://g1bme0lzz2.execute-api.ap-southeast-1.amazonaws.com/dev/score";

interface IData {
  id: string;
  name: string;
  score: string
}

const App: FC = () => {
  const [highScores, setHighScores] = useState(data);
  const [loading, setLoading] = useState<boolean>(false);
  const currentScore = useRef<string>('0');
  const tableLength = useRef<number>(0);

  return (
    <>
      {/* {loading ? "" : <GamePlayer
        currentScore={currentScore.current}
      />}
      {loading ? "" : <Board
        table={highScores}
        loading={loading}
      />} */}

      {/* game */}
      <div className='h-screen w-screen'>
        <Game lowScore='0' />
      </div>


      {/* leaderboard */}
      <div className='bg-slate-700 h-screen w-screen flex flex-col justify-center text-center'>
        <Board table={highScores} loading={loading} />
      </div>

    </>
  )
}

export default App
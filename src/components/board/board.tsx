import { FC } from 'react';
import { DynamoDB } from 'aws-sdk';

// css
import './board.css';

interface Props {
    table: DynamoDB.DocumentClient.ItemList;
    loading: boolean;
    setScreen: (screen: 'game' | 'board') => void;
}

const Board: FC<Props> = ({ table, loading, setScreen }) => {
    return (
        // <section id="board" className='h-full flex flex-col justify-center content-center'>
        <section id="board">
            <div className='board__div'>
                <h1 className='title'>Leaderboard</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>

                        {loading ? "loading...." : table.map((highScore, index: number) => (
                            <tr key={index} className={`${index % 2 === 0 ? 'even' : 'odd'}`}>
                                <td>{index + 1}</td>
                                <td>{highScore.name}</td>
                                <td>{highScore.score}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
                <button type='button' onClick={() => setScreen("game")} className='btn'>Back to Game</button>
            </div>
        </section>

    )
}

export default Board
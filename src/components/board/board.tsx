import { FC } from 'react';
import { DynamoDB } from 'aws-sdk';

interface Props {
    table: DynamoDB.DocumentClient.ItemList;
    loading: boolean;
}

const Board: FC<Props> = ({ table, loading }) => {
    return (
        <section id="board">
            <a href='#game' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xl'>Game</a>
            <div className='flex flex-col justify-center text-center'>
                <h1 className='p-4 text-xl font-bold'>Leaderboard</h1>
                <table className='w-full h-full'>
                    <thead>
                        <tr className='text-white bg-blue-800'>
                            <th className='p-4'>Rank</th>
                            <th className='p-4'>Name</th>
                            <th className='p-4'>Score</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>

                        {loading ? "loading...." : table.map((highScore, index: number) => (
                            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-500' : 'bg-gray-800'} hover:bg-red-500 text-white`}>
                                <td className='p-3 whitespace-nowrap'>{index + 1}</td>
                                <td className='p-3 whitespace-nowrap'>{highScore.name}</td>
                                <td className='p-3 whitespace-nowrap'>{highScore.score}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </section>

    )
}

export default Board
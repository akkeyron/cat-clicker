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
                <h1 className='p-4 text-xl font-bold text-white'>Leaderboard</h1>
                <table className='w-full h-full'>
                    <thead>
                        <tr className='text-white bg-indigo-900'>
                            <th className='p-4'>Rank</th>
                            <th className='p-4'>Name</th>
                            <th className='p-4'>Score</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>

                        {loading ? "loading...." : table.map((highScore, index: number) => (
                            <tr key={index} className={`${index % 2 === 0 ? 'bg-blue-700' : 'bg-blue-900'} hover:bg-red-500 text-white`}>
                                <td className='py-[0.6rem] whitespace-nowrap'>{index + 1}</td>
                                <td className='py-[0.6rem] whitespace-nowrap'>{highScore.name}</td>
                                <td className='py-[0.6rem] whitespace-nowrap'>{highScore.score}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </section>

    )
}

export default Board
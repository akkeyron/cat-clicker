import { FC } from 'react';
import { DynamoDB } from 'aws-sdk';

interface Props {
    table: DynamoDB.DocumentClient.ItemList;
    loading: boolean;
}

const Board: FC<Props> = ({ table, loading }) => {
    return (
        <section id="board" className='h-full flex flex-col justify-center content-center'>
            <div className='flex flex-col justify-center text-center items-center'>
                <a href='#game' className='bg-[#1A174F] hover:bg-[#0067A3] text-[#f9f4f4] font-bold py-2 px-4 rounded-full text-xl w-max top-0 font-mono'>^ Game ^</a>
                <h1 className='p-4 text-4xl font-bold text-[#1A174F] font-mono'>Leaderboard</h1>
                <table className='w-full'>
                    <thead>
                        <tr className='text-[#f9f4f4] bg-[#173753]'>
                            <th className='p-4 text-lg font-mono'>Rank</th>
                            <th className='p-4 text-lg font-mono'>Name</th>
                            <th className='p-4 text-lg font-mono'>Score</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>

                        {loading ? "loading...." : table.map((highScore, index: number) => (
                            <tr key={index} className={`${index % 2 === 0 ? 'bg-[#00607C]' : 'bg-[#006069]'} hover:bg-[#F1962E] text-[#f9f4f4]`}>
                                <td className='py-[0.6rem] whitespace-nowrap font-mono text-lg'>{index + 1}</td>
                                <td className='py-[0.6rem] whitespace-nowrap font-mono text-lg'>{highScore.name}</td>
                                <td className='py-[0.6rem] whitespace-nowrap font-mono text-lg'>{highScore.score}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </section>

    )
}

export default Board
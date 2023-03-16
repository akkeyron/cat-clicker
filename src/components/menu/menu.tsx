import React, { FC } from 'react'

interface IProps {
    setState: (state: 'menu' | 'start' | 'win' | 'lose') => void;
}

const Menu:FC<IProps> = ({ setState }) => {
    return (
        <div className='flex flex-col justify-center text-center content-center flex-wrap'>
            <h1 className='text-5xl font-extrabold mb-5 text-[#0c0c0f] '>Cat Clicker</h1>
            <p className='mb-5 text-[#0c0c0f] font-mono text-lg'>Click the cat as many times as you can!</p>
            <button onClick={() => { setState('start') }} className='bg-[#1A174F] hover:bg-[#0067A3] text-[#f9f4f4] font-bold py-2 px-4 rounded-full text-xl font-mono'>
                Start
            </button>

            <a href='#board' className='mt-4 bg-[#1A174F] hover:bg-[#0067A3] text-[#f9f4f4] font-bold py-2 px-4 rounded-full text-xl font-mono'>Leaderboard</a>



        </div>
    )
}

export default Menu
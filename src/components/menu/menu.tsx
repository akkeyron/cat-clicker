import React, { FC } from 'react'

interface IProps {
    setState: (state: 'menu' | 'start' | 'win' | 'lose') => void;
}

const Menu:FC<IProps> = ({ setState }) => {
    return (
        <div className='flex flex-col justify-center text-center content-center flex-wrap'>
            <h1 className='text-4xl font-bold mb-5'>Cat Clicker</h1>
            <button onClick={() => { setState('start') }} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xl'>
                Start
            </button>

            <a href='#board' className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xl'>Leaderboard</a>



        </div>
    )
}

export default Menu
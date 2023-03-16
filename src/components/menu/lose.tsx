import React, { FC } from 'react'

interface IProps {
    setState: (state: 'menu' | 'start' | 'win' | 'lose') => void;
}

const Lose:FC<IProps> = ({ setState }) => {
  return (
    <div className='flex flex-col justify-center text-center content-center flex-wrap'>
        <h1 className='text-4xl font-extrabold mb-5 font-mono'>You Lose!</h1>
        <button onClick={() => { setState('menu') }} className='bg-[#1A174F] hover:bg-[#0067A3] text-[#f9f4f4] font-bold py-2 px-4 rounded-full text-xl font-mono'>
            Play Again
        </button>
    </div>
  )
}

export default Lose
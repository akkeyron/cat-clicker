import React, { FC } from 'react'

interface IProps {
    setState: (state: 'menu' | 'start' | 'win' | 'lose') => void;
}

const Lose:FC<IProps> = ({ setState }) => {
  return (
    <div className='flex flex-col justify-center text-center content-center flex-wrap'>
        <h1 className='text-4xl font-bold mb-5'>You Lose</h1>
        <button onClick={() => { setState('menu') }} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xl'>
            Play Again
        </button>
    </div>
  )
}

export default Lose
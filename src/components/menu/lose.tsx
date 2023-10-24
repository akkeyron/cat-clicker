import React, { FC } from 'react'

// css
import './menu.css';

interface IProps {
    setState: (state: 'menu' | 'start' | 'win' | 'lose') => void;
}

const Lose:FC<IProps> = ({ setState }) => {
  return (
    <div className='menu__div'>
        <h2 className='title'>You Lose!</h2>
        <button onClick={() => { setState('menu') }} className='btn'>
            Play Again
        </button>
    </div>
  )
}

export default Lose
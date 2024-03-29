import React, { FC } from 'react'

// css
import './menu.css';

interface IProps {
    setState: (state: 'menu' | 'start' | 'win' | 'lose') => void;
    setScreen: (screen: 'game' | 'board') => void;
}

const Menu:FC<IProps> = ({ setState, setScreen }) => {
    return (
        <div className='menu__div'>
            <h1 className='title'>Cat Clicker</h1>
            <h3 className='sub-title'>Click the cat as many times as you can!</h3>
            <button onClick={() => { setState('start') }} className='btn'>
                Start
            </button>

            <button type='button' onClick={() => setScreen("board")} className='btn secondary'>Leaderboard</button>



        </div>
    )
}

export default Menu
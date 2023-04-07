import React, { FC, useEffect, useRef, useState } from 'react'

// css
import './menu.css';

interface IProps {
    setState: (state: 'menu' | 'start' | 'win' | 'lose') => void;
}

interface IData {
    name: string;
    score: string;
}

const api_endpoint = 'https://g1bme0lzz2.execute-api.ap-southeast-1.amazonaws.com/dev/score';


const Win: FC<IProps> = ({ setState }) => {
    // states
    const [replay, setReplay] = useState<boolean>(false);

    const nameRef = useRef<HTMLInputElement>(null);
    const score = localStorage.getItem('score');

    // delay the replay button to appear
    useEffect(() => {
        setTimeout(() => {
            setReplay(true);
        }, 2000)
    }, [])

    // submit score
    const submitScore = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const name = nameRef.current?.value;

        localStorage.removeItem('score');

        if (name === undefined || name === null || score === undefined || score === null) {
            return;
        }

        const data: IData = {
            name,
            score
        }

        setState('menu');

        const response = await fetch(api_endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }


    return (
        <div className='menu__div'>
            <h1 className='title'>You Win!</h1>
            <h2 className='sub-title'>Score: {score}</h2>
            <form onSubmit={submitScore} className='menu__div'>
                <input className='border-2 border-blue-500 rounded-full text-xl mt-8 mb-4 py-2 px-4 text-center font-mono'
                    ref={nameRef} type='text' placeholder='Enter your name' required />

                <button className='btn'
                    type='submit'>Submit</button>

                {replay && <button className='btn'
                    type='button' onClick={() => setState('menu')}>Play Again</button>}
            </form>
        </div>
    )
}

export default Win
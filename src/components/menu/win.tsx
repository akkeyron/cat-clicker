import React, { FC, useRef } from 'react'

interface IProps {
    setState: (state: 'menu' | 'start' | 'win' | 'lose') => void;
}

interface IData {
    name: string;
    score: string;
}

const api_endpoint = 'https://g1bme0lzz2.execute-api.ap-southeast-1.amazonaws.com/dev/score';


const Win: FC<IProps> = ({ setState }) => {
    const nameRef = useRef<HTMLInputElement>(null);
    const score = localStorage.getItem('score');

    // submit score
    const submitScore = (e: React.FormEvent<HTMLFormElement>) => {
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

        // const response = await fetch(api_endpoint, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
    }


    return (
        <div>
            <h1 className='text-4xl'>You Win!</h1>
            <h2 className='text-2xl'>Score: {score}</h2>
            <form onSubmit={submitScore} className='flex flex-col justify-center text-center flex-wrap content-center'>
                <input className='border-2 border-blue-500 rounded-full text-xl mt-8 mb-4 py-2 px-4'
                    ref={nameRef} type='text' placeholder='Enter your name' required />

                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-3 rounded-full text-xl'
                    type='submit'>Submit</button>

                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xl'
                    type='button' onClick={() => setState('menu')}>Play Again</button>
            </form>
        </div>
    )
}

export default Win
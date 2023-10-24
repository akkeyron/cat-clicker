import React, { FC, useState, useRef, useEffect } from 'react'
import catOpen from '../../assets/default1.png';

// css
import './menu.css'

// constant
const START_TIME = 10;

interface IProps {
    lowScore: string;
    setState: (state: 'menu' | 'start' | 'win' | 'lose') => void;
}

const Start: FC<IProps> = ({ lowScore, setState }) => {
    // states
    const [location, setLocation] = useState({ top: 50, left: 50 });
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(START_TIME);

    // refs
    const containerRef = useRef<HTMLDivElement>(null);
    const catRef = useRef<HTMLDivElement>(null);

    // when click the cat
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setScore((prev) => prev + 1);


        // Get the dimensions of the container div
        const container = containerRef.current;

        // Get the dimensions of the cat image
        const cat = catRef.current;
        const catWidth = cat === null ? 0 : cat.offsetWidth;
        const catHeight = cat === null ? 0 : cat.offsetHeight;

        // check if the container is null or undefined
        if (container === undefined || container === null) {
            return;
        }

        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        // Generate a random position for the button within the container div
        const maxX = containerWidth - catWidth;
        const maxY = containerHeight - catHeight;
        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);


        setLocation({ top: newY, left: newX })
    }

    // when time is up
    useEffect(() => {
        // check if the score is higher than the low score
        if (time === 0) {
            if (score > parseInt(lowScore)) {
                setState('win');
                localStorage.setItem('score', score.toString());
            } else {
                setState('lose');
            }
        }
    }, [time])

    // start the timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);





    return (
        <div ref={containerRef} className='container-game'>
            {/* this is the score */}
            <div className='score-hud'>
                <div className='text-2xl font-bold font-mono'>Score: {score}</div>
                <div className='text-2xl font-bold font-mono'>Time: {time}</div>
            </div>

            {/* this is the cat */}
            <div ref={catRef} onClick={handleClick} style={location} className='cat'>
                <img src={catOpen} />
            </div>
            Hello World
        </div>
    )
}

export default Start

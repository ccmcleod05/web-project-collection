import React, { useEffect, useState } from 'react';
import './../styles.css';

type timerProps = {
    reset: () => void;
    
    isEnabled: boolean;
}

function Timer({reset, isEnabled}: timerProps) {

    const[seconds, setSeconds] = useState(60);

    useEffect( () => {
        let timer;
        if(isEnabled){
            timer = setTimeout(() => {setSeconds(seconds - 1)}, 1000);
        }
        if(seconds === 0){
            clearInterval(timer);
            setSeconds(60);
            reset();
        }
    }, [isEnabled, seconds])


    return (
        <div className={'bg-blue-600 text-white ml-2 h-fit w-44 p-6 rounded-xl text-6xl shadow-xl'}>
            <p>{seconds}s</p>
        </div>
    )  
}

export default Timer;
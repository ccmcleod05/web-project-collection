import React from 'react';
import './../styles.css';

type buttonProps = {
    typeOfButton: 'start' | 'next';

    handleStart: () => void;

    handleClick: () => void;
}

function Button ({typeOfButton, handleStart, handleClick}: buttonProps) {
    return (
        <>
            { typeOfButton === 'start' ?
                <button className={'shadow-xl h-12 w-32 bg-blue-500 text-white rounded-lg'} onClick={() => handleStart()}>
                    Start
                </button> :
                <button className={'shadow-xl h-8 w-24 bg-green-500 text-white rounded-lg'} onClick={() => handleClick()}>
                    Next
                </button>
            }
        </>
    );
}

export default Button;
import React from 'react';
import Button from './button'
import './../styles.css';

type cardProps = {
    equation: string;

    input: string;

    handleInput: (inputToHandle: string) => void;

    handleClick: () => void;

    handleStart: () => void;

    isIncorrect: boolean;

    isEnabled: boolean;
}

export default function Card ({equation, input, handleInput, handleClick, handleStart, isIncorrect, isEnabled}: cardProps) {
    return (
        <>
            <div className={isIncorrect ? (isEnabled ? 'card mb-4 overflow-hidden rounded-3xl h-68 w-48 bg-blue-500 shadow-xl border-red-500 border-4 py-2' : 'card mb-4 overflow-hidden rounded-3xl h-44 w-48 bg-blue-500 shadow-xl border-red-500 border-4 py-2') : 
            (isEnabled ? 'card mb-4 overflow-hidden rounded-3xl h-68 w-48 bg-blue-500 shadow-xl border-blue-500 border-4 py-2' : 'card mb-4 overflow-hidden rounded-3xl h-44 w-48 bg-blue-500 shadow-xl border-blue-500 border-4 py-2')}>
                <p className={'mt-4 relative bg-blue-500 text-white text-2xl'}>
                    Solve: {equation}
                </p>
                <div className={'h-20 mb-5'}>
                    <input placeholder="Answer..." value={input} onChange={(e) => handleInput(e.target.value)} disabled={!isEnabled} 
                    className={'input shadow-xl mt-4 relative rounded-lg text-black text-lg h-12 w-36 bg-blue-600 p-8 placeholder-gray-200 disabled:cursor-not-allowed'} style={{color: 'white'}}/>
                </div>
                {isEnabled && <Button typeOfButton='next' handleClick={handleClick} handleStart={handleStart}></Button>}
                {isEnabled && <p className={'text-white mt-2 text-xs mt-4 mb-6'}>Repeating fractions to five decimal places</p>}
            </div>
        </>
    );
}
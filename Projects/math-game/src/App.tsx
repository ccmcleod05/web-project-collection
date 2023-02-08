import React, { useState } from 'react';
import './styles.css';
import Card from './components/card';
import Button from './components/button';
import Timer from './components/timer';

function App() {
    const[equation, setEquation] = useState('');
    const[input, setInput] = useState('');
    const[isIncorrect, setIsIncorrect] = useState(false);
    const[isEnabled, setIsEnabled] = useState(false);
    const[answer, setAnswer] = useState(NaN);
    const[highScore, setHighScore] = useState(0);
    const[currentScore, setCurrentScore] = useState(0);

    let firstNum: number = Math.floor(Math.random() * 100);
    let lastNum: number = Math.floor(Math.random() * 100);
    let operator: string;

    const changeCard = (typeOfButton?: string) => {
        if (answer === Number.parseFloat(input)) {
            if (highScore <= currentScore) {
                setHighScore(highScore + 1);
            }
            setCurrentScore(currentScore + 1);
        }
        if (answer === Number.parseFloat(input) || typeOfButton === 'start') {
            let answer = 0;
            firstNum = Math.floor(Math.random() * 10);
            lastNum = Math.floor(Math.random() * 10);

            if( Math.random() < .25 ){
                operator = '+';
            }
            else if( Math.random() < .5 ){
                operator = '-';
            }
            else if ( Math.random() < .75 ){
                operator = '*';
            }
            else{
                operator = '/';
                let testAnswer: number = NaN;
                while (Number.isNaN(testAnswer) || !Number.isFinite(testAnswer)) {
                    if (Math.random() < .5){
                        firstNum = Math.floor(Math.random() * 10);
                        lastNum = firstNum * Math.floor(Math.random() * 10);
                    }
                    else {
                        lastNum = Math.floor(Math.random() * 10);
                        firstNum = lastNum * Math.floor(Math.random() * 10);
                    }
                    testAnswer = (firstNum * 1.0) / (lastNum * 1.0);
                }
            } 
    
            if( operator === '+'){
                answer = firstNum + lastNum;
            }
            else if( operator === '-'){
                answer = firstNum - lastNum;
            }
            else if( operator === '*'){
                answer = firstNum * lastNum;
            }
            else{
                answer = (firstNum * 1.0) / (lastNum * 1.0);
            }
            
            answer = Number.parseFloat(answer.toFixed(5));
            setEquation(firstNum + ' ' + operator + ' ' + lastNum);
            setAnswer(answer);
            setIsIncorrect(false);
        }
        else{
            setIsIncorrect(true)
        }
    }

    const initializeCard = () => {
        changeCard('start');
    }

    const handleClick = () => {
        setInput('');
        changeCard();
    }

    const handleStart = () => {
        initializeCard();
        setIsEnabled(true);
    }

    const handleReset = () => {
        setIsEnabled(false);
        setEquation('');
        setInput('');
        setIsIncorrect(false);
        setIsEnabled(false);
        setAnswer(NaN);
        setCurrentScore(0);
    }

    const handleInput = (inputToHandle: string) => {
      setInput(inputToHandle);
    }

    return (
        <div className={'flex justify-center ml-52 mt-52'}>  
            <div>
                <Card equation={equation} input={input} handleClick={handleClick} handleStart={handleStart} handleInput={handleInput} isIncorrect={isIncorrect} isEnabled={isEnabled}></Card>
                {!isEnabled && <Button typeOfButton='start' handleClick={handleClick} handleStart={handleStart}></Button>}
            </div>
            <div>
                <div className={isEnabled ? 'score-container h-32' : 'score-container h-16'}>
                    <div className={'score shadow-xl ml-2 bg-blue-600 text-white transition-height duration-500 ease-in-out w-44 p-4 rounded-xl'}>
                        <p>High Score: {highScore}</p>
                        {isEnabled && <p className={'mt-2'}>Current Score: {currentScore}</p>}
                    </div>
                </div>
                <Timer isEnabled={isEnabled} reset={handleReset}></Timer>
            </div>
        </div>
    );
}

export default App

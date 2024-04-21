import React, { useState, useEffect, createContext, useContext } from 'react';

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
    const [time, setTime] = useState(0); 
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        let interval = null;

        if (timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1000); 
            }, 1000); 
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerOn]);

    const startTimer = () => {
        setTime(0); 
        setTimerOn(true); 
    };

    const resetTimer = () => {
        setTime(0);
        setTimerOn(false);
    };

    
    const value = { time, startTimer, resetTimer };

    return (
        <TimerContext.Provider value={value}>
            {children}
        </TimerContext.Provider>
    );
};

export function Timer() {
    const { time, startTimer, resetTimer } = useContext(TimerContext);

    
    const formattedTime = new Date(time).toISOString().substr(11, 8);

    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold">Timer: {formattedTime}</h1>
            <button className="mx-2 p-2 bg-blue-500 text-white rounded" onClick={startTimer}>Start</button>
            <button className="mx-2 p-2 bg-red-500 text-white rounded" onClick={resetTimer}>Reset</button>
        </div>
    );
}

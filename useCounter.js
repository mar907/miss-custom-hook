import { useState } from 'react';

export const useCounter = (inicialState = 10) => {

    const [counter, setCounter] = useState(inicialState);

    const reset = () => {
        setCounter(inicialState);
    }

    const increment = () => {
        setCounter(counter + 1);
    }
    
    const decrement = () => {
        setCounter(counter - 1);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };

}

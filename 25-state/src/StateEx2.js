import { useState } from 'react';

const CounterEx2 = () => {
    const [number, setNumber] = useState(0);
    const onClickIncrease = () => {
        setNumber(number + 1);
    }
    const onClickDecrease = () => {
        setNumber(number - 2);
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onClickIncrease}>Increase</button>
            <button onClick={onClickDecrease}>Decrease</button>
        </div>
    )
};

export default CounterEx2;
import React, { useState } from 'react'
import './Counter.css';

function Counter() {

    const [counterValue, setCounterValue] = useState(0)
    return (
        <div className='container'>
            <h1>Click Counter App</h1>
            <p className='count-value'>Counts: {counterValue}</p>
            <button className='increment' onClick={()=>{
                setCounterValue((currentvalue)=> currentvalue + 1)
            }}>Increase</button>
            <button className='decrement' disabled={counterValue === 0} onClick={()=>{
                setCounterValue((currentvalue)=> currentvalue - 1)
            }}>Decrease</button>
            <button className='reset' onClick={()=>{
                setCounterValue(0)
            }}>Reset</button>
            {counterValue===0 ? <p>You have reached the lower limit of counter</p> : null}
        </div>
    )
}

export default Counter

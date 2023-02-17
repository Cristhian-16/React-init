import React from 'react'
import PropType from 'prop-types'
import { useState } from 'react'

const App = ({ value }) => {

    const [counter, setCounter] = useState(value)

    const handleClick = () => setCounter(counter + 1)
    const handleMin = () => setCounter(counter - 1)
    const handleReset = () => setCounter(value)

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <div className='organizar'>
                <button onClick={handleClick}> + </button>
                <button onClick={handleMin}> - </button>
                <button onClick={handleReset}> Reset </button>
            </div>

        </>
    )
}

App.propType = {
    value: PropType.number
}

export default App
import React from 'react'

function Square({ onClick, value, highlightWinner }) {
    const className = `square ${highlightWinner ? "squarehighlight" : ""}`
    return (
    <button 
    className={className}
    onClick={onClick}
    > <p>
        {value}
    </p>
    </button>
    )
}

export default Square

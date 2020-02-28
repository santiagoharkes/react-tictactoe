import React from 'react'

function Square({ onClick, value, highlightWinner }) {
    const className = `square ${highlightWinner ? "squarehighlight" : ""}`
    return (
    <button 
    className={className}
    onClick={onClick}
    >
        {value}
    </button>
    )
}

export default Square

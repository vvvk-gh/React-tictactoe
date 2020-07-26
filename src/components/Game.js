//Compoment File name should be always capitals just like Square.js , Game.js , Board.js
import React from 'react'
import Board from './Board'

export default function Game() {
    return (
        <div className="game">
            <div className="game-info">
            <Board />        
            </div>
        </div>
    )
}
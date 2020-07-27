//Compoment File name should be always capitals just like Square.js , Game.js , Board.js
import React from 'react'
import Board from './Board'

//converting functional component into a class component

export default class Game extends React.Component {
    constructor(){
        //Its better to include super in the constructer for better results
        super()
        //creating a state to keep track of the following
        //nextTurn , Numberofsteps ,history
        this.state = {
            xIsNext : true,
            stepNumber : 0,
            history :[
                {squares : Array(9).fill(null)}
            ]
        }
    }
    //return should be always inside the render
    render(){
        return (
            <div className="game">
                <div className="game-info">
                <Board />        
                </div>
            </div>
        )
    }
    
}
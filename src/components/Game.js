import React from 'react'
import Board from './Board'

export default class Game extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            xIsNext : true,
            stepNumber : 0,
            history :[
                {squares : Array(9).fill(null)}
            ]
        }
    }

    //button is clicked the index of the button is passed
    handleClick = (i) =>{
        //gets you the history from your state 
       const history = this.state.history
       //current gives you the latest/ last updated object with array of 9 elements 
       const current = history[history.length - 1]
       //since current holds an object of arrays of 9 elements those elements are copied into sqaures
       const squares = current.squares
        //the index of that gets updated based on the isNextValue
        squares[i] = (this.state.xIsNext) ? 'X' : 'O'

        //updating the required 
        this.setState({
            //adding the new updated object into the history
            history : history.contact({squares : squares}),
            //toggles on the value
            xIsNext:!this.state.xIsNext,
            //no of steps is equal to the length of the history object as new object is added/contacted for every click
            stepNumber :history.length
            
        })
      }
  
    render(){
        return (
            <div className="game">
                <div className="game-info">
                {/* //value is the prop it holds the result value */}
                <Board />        
                </div>
            </div>
        )
    }
    
}
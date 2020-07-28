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


    handleClick = (i) =>{
       const history = this.state.history
       const current = history[history.length - 1]
       const squares = current.squares
        squares[i] = (this.state.xIsNext) ? 'X' : 'O'

        this.setState({
            
            history : history.contact({squares : squares}),
            xIsNext:!this.state.xIsNext,
            stepNumber :history.length
            
        })
      }
  
    render(){
        const history = this.state.history 
        const current = history[this.state.stepNumber]

        return (
            <div className="game">
                <div className="game-info">
                <Board squares = {current.squares} clickAction = {(i) => this.handleClick(i)}/>        
                </div>
            </div>
        )
    }
    
}
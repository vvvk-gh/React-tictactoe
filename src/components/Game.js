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
            history : history.concat({squares : squares}),
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
    
calculateWinner =  (squares) => {
    //possible winning positions  
    const possibilites = [
      [0,1,2], //row
      [3,4,5], //row2
      [6,7,8], //row3
      [0,3,6], //col1
      [1,4,7], //col2
      [2,5,8], //col3
      [0,4,8], //diagonal
      [2,4,6], //diagonal
      ]

       for(let i=0; i < possibilites.length; i++){
           //destrcuting the array
           //possibilites[i] = [x,y,z] from above array
           //a =x , b = y , c=z
            const [a,b,c] = possibilites[i]
            if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
                    return squares[a]
            }
        }
        return null
    }
}
import React from 'react'
import Square from './Square'
//changed into class component

export default class Board extends React.Component {
//constructor is not mandatory since we are defining any state
// we can access props using this.props

    renderSquare(i){
        // i = vale sent from the button
        //value will be equal to the sqaures from Game.js
        //handle will be equal to the function in clickAction in Game.js
            return(
                <Square value = {this.props.squares[i]} handleClick = {() => this.props.clickAction(i)}/>
            )
    }

//added render as we made func comp into  class component
render(){
    return (
        <div>
            <div className="board-row">
                {this.renderSquare(0)} 
               {this.renderSquare(1)} 
               {this.renderSquare(2)}  
           </div>
           <div className="board-row">
               {this.renderSquare(3)} 
               {this.renderSquare(4)}
               {this.renderSquare(5)} 
           </div>
           <div className="board-row">
               {this.renderSquare(6)}
               {this.renderSquare(7)} 
               {this.renderSquare(8)}
           </div>
        </div>
           
       )
    }    
    
}
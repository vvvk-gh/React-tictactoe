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
//created an new function to return an value
    someFunction = ()=> {return 5 }

    render(){
        //assigning the function value to result 
        //this keyword refers to the current object : Game.someFunction() 
        const result = this.someFunction()
        return (
            <div className="game">
                <div className="game-info">
                {/* //value is the prop it holds the result value */}
                <Board value = {result}/>        
                </div>
            </div>
        )
    }
    
}
//Compoment , comp file names : The first letter should be always capitals just like Square.js , Game.js , Board.js

import React from "react"

export default function Square(props) {
  return( 
    //onclick it will go to handleclick function in Board.js (Squares parent )
    //and button value will props.value is the jsx variable in Board.js 
    <button className="square" onClick = {props.handleClick}> {props.value} </button>
  )
}
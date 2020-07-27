//Compoment , comp file names : The first letter should be always capitals just like Square.js , Game.js , Board.js

import React from "react"

export default function Square(props) {
  return(
    // this will show the value that is passed from game to board and then to square 
    <button className="square"> {props.insideValue} </button>
  )
}
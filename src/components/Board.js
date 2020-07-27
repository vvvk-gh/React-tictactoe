import React from 'react'
import Square from './Square'

export default function Board(props) {
      console.log(props) 
    // will show you result {value: 5} as passed props is value
       return (
        <div>
            <div className="board-row">
                {/* Need to send this passed value to the sqaure componen*/}
               <Square insideValue = {props.value}/> 
               <Square/>
               <Square/>
           </div>
           <div className="board-row">
               <Square/>
               <Square/>
               <Square/>
           </div>
           <div className="board-row">
               <Square/>
               <Square/>
               <Square/>
           </div>
        </div>
           
       )
}
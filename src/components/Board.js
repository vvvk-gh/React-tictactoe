import React from 'react'
import Square from './Square'

export default function Board(props) {
       return (
        <div>
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
           <div className="board-row">
               <Square/>
               <Square/>
               <Square/>
           </div>
        </div>
           
       )
}
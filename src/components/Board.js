//Compoment File name should be always capitals just like Square.js , Game.js , Board.js

import React from 'react'
import Square from './Square'

export default function Board() {
       return (
        <div>
            {/* We cant send mutiple div so we wrapped all 3 div in one parent div */}
            <div className="board-row">
               {/*  Jsx sync */}
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
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game'
//class based component

class App extends React.Component{
    render(){
      return (
        <Game />
      )
    }
}

//Functional based component

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          This is a single page application
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

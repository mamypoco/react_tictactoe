import React, {Component } from 'react';
import Board from './components/Board';


class App extends Component {
  render() {

 
  return (
    <div className="App">
      <h1 className = "header">Tic Tac Toe</h1>
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div> {this.props.status} </div>
          <ol>{ } </ol>
        </div>
    </div>
  );
}
}
export default App;

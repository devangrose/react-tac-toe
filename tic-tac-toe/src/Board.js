import React, { Component } from 'react';
import Square from './Square';

class Board extends React.Component {

  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      playerTurn: false,
      winner: null,
      showWinner: false
    };
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}/>;
  }

  changeTurn() {
    this.setState({
      playerTurn: !this.state.playerTurn
    });
  }
  handleClick(i){
    if(this.state.squares[i] == null && this.state.winner == null) {
      var copy = this.state.squares;
      const player =(this.state.playerTurn)? 'X' : 'O'; 
      copy[i] =player;
      this.setState({squares: copy});
      this.changeTurn();
      console.log(calculateWinner(copy));
      const winner = calculateWinner(copy);
      if(winner != null){
        this.setState({winner: `Winner: ${winner}!`, showWinner: true});
      }
    }
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <h1>{this.state.winner}</h1>
        <div className="status">{status}</div>
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
    );
  }
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] != null && squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;

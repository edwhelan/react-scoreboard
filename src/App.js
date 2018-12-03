import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    //set up state 
    this.state = {
      scores: [
        {
          id: 1,
          name: 'alice',
          score: 1001
        },
        {
          id: 2,
          name: 'ahjuma',
          score: 200
        },
        {
          id: 3,
          name: 'wendy',
          score: 199
        }
      ]
    }
  }



  render() {
    return (
      <div className="App">
        <h1>Scoreboard App</h1>
        <div className='score-container'>
          {this._scoresAsCards()}
        </div>
      </div>
    );
  }

  _scoresAsCards() {
    const cards = this.state.scores.map(score => {
      return (
        <div key={score.id}>
          <h2 >{score.name}</h2>
          <h3>{score.score}</h3>
        </div>
      );
    });
    return cards;
  }

}

export default App;

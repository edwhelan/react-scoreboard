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
          score: 0
        },
        {
          id: 2,
          name: 'ahjuma',
          score: 0
        },
        {
          id: 3,
          name: 'wendy',
          score: 0
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
          <button onClick={() => this._incrementScoreById(score.id)}>+</button>
        </div>
      );
    });
    return cards;
  }
  _incrementScoreById(id) {
    // find player in this.state.scores
    const newScores = this.state.scores.map(score => {
      if (score.id !== id) {
        return score;
      } else {
        return {
          id: score.id,
          name: score.name,
          //increment score
          score: score.score + 1
        }
      }
    })
    //and call this.setState
    this.setState({
      scores: newScores
    })
  }

}

export default App;

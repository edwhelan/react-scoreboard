import React, { Component } from 'react';
import './App.css';
import Scorecard from './Scorecard';

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
        <Scorecard
          key={score.id}
          id={score.id}
          name={score.name}
          score={score.score}
          handleClick={(e) => this._incrementScoreById(e)}
          handleClickDown={(e) => this._decrementScoreById(e)}
          handleClickUp={(e) => this._resetScoreById(e)}
        />

      );
    });
    return cards;
  }
  // v1 map manually constructing replacement
  // _incrementScoreById(id) {
  //   // find player in this.state.scores
  //   const newScores = this.state.scores.map(score => {
  //     if (score.id !== id) {
  //       return score;
  //     } else {
  //       return {
  //         id: score.id,
  //         name: score.name,
  //         //increment score
  //         score: score.score + 1
  //       }
  //     }
  //   })
  //   //and call this.setState
  //   this.setState({
  //     scores: newScores
  //   })
  // }

  //v2 .map using a shorthand to copy values out of the original

  // _incrementScoreById(id) {
  //   //find player in this. state.scores
  //   // increment score
  //   const newScores = this.state.scores.map(score => {
  //     if (score.id !== id) {
  //       return score
  //     } else {
  //       return {
  //         ...score,
  //         score: score.score + 1
  //       }
  //     }
  //   });
  //   this.setState({
  //     scores: newScores
  //   })

  // v3 .map object copy  + ternary + implicit return
  // using a shorthand to copy values out the original score
  _incrementScoreById(id) {
    //find player by this.state.scores
    const newScores = this.state.scores.map(bob => {
      return bob.id !== id ? bob : { ...bob, score: bob.score + 1 }
    })
    //increment their score
    // and call this.setState
    this.setState({
      scores: newScores
    })
  }



  _decrementScoreById(id) {
    //find player in this. state.scores
    // increment score
    const newScores = this.state.scores.map(score => {
      if (score.id !== id) {
        return score
      } else {
        return {
          ...score,
          score: score.score - 1
        }
      }
    });
    this.setState({
      scores: newScores
    })
  }

  _resetScoreById(id) {
    //find player in this. state.scores
    // increment score
    const newScores = this.state.scores.map(score => {
      if (score.id !== id) {
        return score
      } else {
        return {
          ...score,
          score: 0
        }
      }
    });
    this.setState({
      scores: newScores
    })
  }
}

export default App;

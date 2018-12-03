import React from 'react';


function Scorecard(props) {
  return (
    <div>
      <h2 >{props.name}</h2>
      <h3>{props.score}</h3>
      <button onClick={() => props.handleClick(props.id)}>+</button>
      <button onClick={() => props.handleClickDown(props.id)}>-</button>
      <button onClick={() => props.handleClickUp(props.id)}>reset</button>
    </div>
  )
}

export default Scorecard;
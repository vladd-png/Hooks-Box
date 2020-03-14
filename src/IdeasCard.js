import React from 'react';

const IdeasCard = (props) => {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <button onClick={() => props.deleteIdea(props.id)}>Fuck This Idea</button>
    </article>
  )
}

export default IdeasCard;

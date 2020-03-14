import React, { useState } from 'react';
import Form from './Form.js';
import IdeasContainer from './IdeasContainer.js';

const App = () => {
  const [ideas, updateIdea] = useState( [{ id: '1', title: 'Sloppy', body: 'My first sloppy idea box' }] );

  const addNewIdea = (idea) => {
    updateIdea([...ideas, idea])
  }
  const deleteIdea = (id) => {
    const findDeleted = ideas.filter(idea => idea.id !== id);
    updateIdea(findDeleted)
  }
  

  return(
    <main>
      <h1> Idea Box 3 </h1>
      <Form addIdea={addNewIdea}/>
      <IdeasContainer ideas={ideas} deleteIdea={deleteIdea}/>
    </main>
  )
}

export default App;

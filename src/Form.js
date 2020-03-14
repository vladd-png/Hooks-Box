import React, { useState, useEffect } from 'react';

const Form = (props) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  function setTitleChange(event) {
    setTitle(event.target.value)
  }

  function setBodyChange(event) {
    setBody(event.target.value)
  }

  const submitIdea = (props) => {
    // props.addIdea.addNewIdea({ id: Math.random(), title: title, body: body })
    setTitle('')
    setBody('')
  }

  return(
    <form>
      <input type='text' name='title' placeholder='title..' value={title} onChange={setTitleChange}/>
      <input type='' name='body' placeholder='body..' value={body} onChange={setBodyChange}/>
      <button type='button' onClick={submitIdea}>Add Idea</button>
    </form>
  )
}

export default Form;

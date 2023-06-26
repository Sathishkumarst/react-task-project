import React from 'react'
import Child from './Child'


function Parent(props) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  return (
    <div>
        <h1>Parent Component</h1>

        <Child Name="Sathish" email="Sathishgmail.com" skills="React"></Child>

        <form >
      <button onClick={handleSubmit}>Submit</button>
    </form>
  </div>
  )
}

export default Parent
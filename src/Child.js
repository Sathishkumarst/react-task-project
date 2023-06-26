import React from 'react'
// import Parent from './Parent'

function Child(props) {

  return (
    <div>
        <h3>Child Component</h3>
        
    <h1 style={{color:"red"}}>Employee Name:{props.Name}</h1>
    <h1 style={{color:"green"}}>Employee Mail:{props.email}</h1>

    <h1 style={{color:"blue"}}>Employee Cource:{props.skills}</h1>

    {/* {props.Name} <br/>
    {props.skills} */}
    {props.p}
  </div>
  )
}




export default Child
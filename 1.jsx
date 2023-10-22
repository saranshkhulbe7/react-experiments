import './App.css'

import { useState } from 'react'

function App() {
  console.log("App rendered")
  const [course, setCourse] = useState(1)

  return (
    <div style={{border: "1px solid black"}}>
      <button onClick={() => {setCourse(course+1)}}>+course</button>
      <div style={{display: "flex", gap: "10rem"}}>
         <B course={course}/>
     <C course={course} setCourse={setCourse}/>
      </div>
    
    </div>
  )
}

const B = ({course}) => {
    console.log("B rendered")
  return (
    <div style={{border: "1px solid black", width:"100%"}}>
        <div>B</div>
        <div>{course}</div>
    </div>
  )
}
const C = ({course, setCourse}) => {
    console.log("C rendered")
    const [name, setName] = useState(51)
  return (
    <div style={{border: "1px solid black", width:"100%"}}>
        <div>C</div>
        <button onClick={() => {setName(name+1)}}>+name</button>
        <div>{course}</div>
        <div>{name}</div>
    </div>
  )
}
export default App

// updated
// check 2
import { useState } from 'react'
import React from 'react'
import './App.css'

let count = 1;



function App() {
  const showTime = new Date().toLocaleTimeString();
  const [ctime ,setCtime]= useState(showTime);
  const Update = ()=>{
    const showTime = new Date().toLocaleTimeString();
    setCtime(showTime);
  }

return(
  <>
  <h1>{ctime}</h1>
  <button onClick={Update}>Refresh</button>
</>
)


}

export default App

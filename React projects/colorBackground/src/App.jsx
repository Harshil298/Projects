import { useState } from 'react'

function App() {
  const [color, setColor] = useState("Black")

  let obj = {
    backgroundColor : color,
    width : "100%",
    height : "100vh"
  }

  return (
    <>
      <div style={obj}>
      </div>
      <div className='Container'>
        <div className='row'>
          <button style={{backgroundColor:"Green", color:"white"}} onClick={() => setColor("Green")}>Green</button>
          <button onClick={() => setColor("Blue")}>Blue</button>
          <button onClick={() => setColor("Yellow")}>Yellow</button>
          <button onClick={() => setColor("Red")}>Red</button>
          <button onClick={() => setColor("Orange")}>Orange</button>
        </div>
      </div>
    </>
  )
}

export default App

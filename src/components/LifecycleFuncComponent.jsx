import { useState } from "react"


const LifecycleFuncComponent = () => {

    const [counter, setCounter] = useState(7)
    const [color, setColor] = useState("brown")
    // let counter = 10
 
    const increment =() => {
       setCounter (counter + 10)
    }
    // counter = counter +10

    console.log("render")
    console.log("render",counter)

    return <div>
        counter : {counter}
    <br />
        <button onClick={increment}>Increment</button>
        <button 
            onClick={() => setCounter(counter +10)}
        >Increment v2</button>

        <hr />

        <div style={{
            color : color
        }}>Text with color</div>

        <button 
            onClick={() => setColor("green")}
        >Change to green</button>
        <button 
            onClick={() => setColor("red")}
        >Change to red</button>
    </div>

    
}

export default LifecycleFuncComponent
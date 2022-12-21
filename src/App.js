import Student from "./components/Student"

import PersonIterator from "./components/PersonIterator"
import StudentClass from "./components/StudentClass"

import "./css/style.css"




const App = () => {

  const name = "Mia Koluci"
const age = 34
const toShow = true

const fruits = [`apple`, `android`, `banana`]
const student = {
  name,
  age,
  fruits,
}
const customStyle = {paddingLeft : "100px", color: "purple"}
    return(<>
    <div className="red">Hello World</div>

    <div style={{paddingLeft : "10px", color: "green"}}>Hello World</div>

    <div style={customStyle}>Hello World</div>

    <Student 
    fruits={fruits} 
    name={name} age={age} 
    shouldTheComponentShow={toShow} />

    <Student 
    fruits={["orange", "lemon", "lime"]} 
    name={"Svetle"} 
    age={29} 
    shouldTheComponentShow={true} />

  <hr></hr>

  <PersonIterator />

  <hr></hr>

  <StudentClass 
   fruits={["orange", "lemon", "lime"]} 
   name={"Svetle"} 
   age={29} 
   shouldTheComponentShow={true}/>
    </>);
}

// function App() {
//   return (
//     <div>Hello World</div>
//   );
// }

export default App;

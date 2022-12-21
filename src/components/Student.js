import PropTypes from 'prop-types'

const Student = (props) => {

const  { shouldTheComponentShow, name, age, fruits } = props

// ternaren

// if (props.shouldTheComponentShow) {
//     console.log("true")
// }   else {
//     console.log("false")
// }

// props.shouldTheComponentShow ? console.log("true")  : console.log("false")

// conditioanal rendering
//  if sshouldTheComponentShow is true it will print the component
// if shouldTheComponentShow is false it will return null (not render anything)
// if(!shouldTheComponentShow){
//     return null
// }

    // console.log(props)
    return shouldTheComponentShow &&
    <div>
        <h1>Student</h1>
        <div>Name : {name}</div>
        <div>Age : {age}</div>
        <div>ShouldShow : {shouldTheComponentShow}</div>
        <div>Fruits : {fruits.map(fruit => {
            return <li key={fruit}>{fruit}</li>
        })}</div>

        {/* <div>Fruits : {fruits.map(function (fruit) {
            return <li>{fruit}</li>
        })}</div>

        <div>Fruits : {fruits.map(fruit => <li>{fruit}</li> )}</div> */}
    </div>
}

export default Student 

Student.propTypes = {
    shouldTheComponentShow : PropTypes.bool,
     name : PropTypes.string, 
     age : PropTypes.number, 
     fruits : PropTypes.arrayOf(PropTypes.string)
}
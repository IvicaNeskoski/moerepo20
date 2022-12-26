import { Component } from "react";


export default class LifecycleClassComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            counter : 8
        }
    }

    componentDidMount () {
        console.log("LifecycleClassComponent => componentDidMount")
    }

    componentWillUnmount () {
        console.log("LifecycleClassComponent => componentWillUnmount")
    }

    increment = () => {
        // this.state.counter = 20
        this.setState((state) => ({counter : state.counter + 10}))

        // so - ke pravi minusiranje
    }

    render() {




        return <div>
            <hr />

            Class Component
            <br />
            counter : {this.state.counter}
            <br />
            <button
            onClick={this.increment}>
                Increment</button>
        </div>
    }
}
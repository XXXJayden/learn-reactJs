import React from "react";

class MyComponent extends React.Component {
    
    state ={
        name :"Tien",
        address: "123",
        age: 20,
        gender: "Male"
    };

    handleClick (event) {
        console.log("siuuuuuuuuuuuuuuuuuuuuuu");
        console.log("My name is", this.state.name);

        this.setState({
            name: "Chos",
            address: 50
        })
    }
    handleOnMoverOver(event) {
    console.log(event);
    }
    //JSX
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                My name is {this.state.name} and I'm from {this.state.address}
                
                <button onMouseOver={this.handleOnMoverOver} >Click me</button>
                <button onClick={(event) => {this.handleClick(event)}} >Click me</button>
            </div>
        );
}
}

export default MyComponent;
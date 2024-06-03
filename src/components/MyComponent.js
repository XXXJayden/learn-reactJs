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
    handleOnChangeInput =(event) =>{ 
        this.setState({
            name: event.target.value
        })
    }
    handleOnSubmit =(event) => {
        event.preventDefault();
        
    }
    //JSX
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onClick={(event) => {this.handleClick(event)}} >Click me</button>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text"
                    value={this.state.name}
                    onChange={(event) => this.handleOnChangeInput(event)}
                    ></input>
                    <button> Submit </button>
                </form>
            </div>
        );
}
}

export default MyComponent;
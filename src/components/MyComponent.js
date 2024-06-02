import React from "react";

class MyComponent extends React.Component {
    
    state ={
        name :"Tien",
        address: "123",
        age: 20,
        gender: "Male"
    };

    //JSX
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
}
}

export default MyComponent;
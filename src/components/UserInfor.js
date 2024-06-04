import React from "react";

class UserInfor extends React.Component {
    
        state ={
        name :"Tien",
        address: "123",
        age: 20,
        gender: "Male"
    };

    handleOnChangeInput =(event) =>{ 
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge =(event) =>{ 
        //bad code this.state.age = event.target.value
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit =(event) => {
        event.preventDefault();
        
    }
    
    render() {
        return (
            <div>My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name:</label>
                    <input type="text"
                    value={this.state.name}
                    onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    
                    <label>Your age:</label>
                    <input type="text"
                    value={this.state.age}
                    onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button> Submit </button>
                </form></div>
        )
    }
}




export default UserInfor;
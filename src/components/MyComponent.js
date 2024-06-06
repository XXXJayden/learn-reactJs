import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    //JSX
    render() {
        const myInfor = ['a', 'b', 'c', 'd']
        return (
            <div>
                <UserInfor/>
                <br/>
                <DisplayInfor name ="Jayden" age ="20" myInfor={myInfor}/>
            </div>
        );
}
}

export default MyComponent;
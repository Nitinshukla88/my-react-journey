import React from "react";

class UserClass extends React.Component { // That's how class based components are written in React.
  
  constructor(props){
    super(props); // Here props is received as a object

    this.state = {
      count : 0,
    }

  }

  render() {

    const { name , location } = this.props; // Destructuring the props object

    const {count} = this.state;

    return (
      <div>
        <h2>{name}</h2>
        <h2>UserID: Nitinshukla88</h2>
        <h3>Location : {location}</h3>
        <h1>Count = {count}</h1>
        <button onClick={() =>{
          this.setState({
            count : this.state.count +1
          })
        }}>Click to increase count</button>
      </div>
    );
  }
}

export default UserClass;
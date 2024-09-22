import React from "react";

class UserClass extends React.Component { // That's how class based components are written in React.
  
  constructor(props){
    super(props); // Here props is received as a object

    this.state = {
       name : "dummy", 
       location : "dum-loation"
    }

  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/Nitinshukla88");
    const jsonData = await data.json();
    this.setState({
      name : jsonData.name,
      location : jsonData.location
    })
  }

  render() {

    const { name , location } = this.state; // Destructuring the props object


    return (
      <div>
        <h2>{name}</h2>
        <h2>UserID: Nitinshukla88</h2>
        <h3>Location : {location}</h3>
      </div>
    );
  }
}

export default UserClass;
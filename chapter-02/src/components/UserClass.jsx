import React from "react";

class UserClass extends React.Component { // That's how class based components are written in React.
  
  constructor(props){
    super(props); // Here props is received as a object

    this.state = {
       name : "dummy", 
       location : "dum-loation",
       avtar : "https://dummy-avtar.com"
    }

  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/Nitinshukla88");
    const jsonData = await data.json();
    this.setState({
      name : jsonData.name,
      location : jsonData.location,
      avtar : jsonData.avatar_url
    })
  }

  render() {

    const { name , location , avtar} = this.state; // Destructuring the props object


    return (
      <div>
        <h2>{name}</h2>
        <img src= {avtar}></img>
        <h2>UserID: Nitinshukla88</h2>
        <h3>Location : {location}</h3>
      </div>
    );
  }
}

export default UserClass;
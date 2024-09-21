import { useState } from "react";

const User = ({ name , location }) => {

    const [count, setcount] = useState(0);

    return (
        <div>
            <h2>{ name }</h2>
            <h2>UserID: Nitinshukla88</h2>
            <h3>Location : {location}</h3>
            <h1>Count = {count}</h1>
            <button onClick={() =>{ // That's how you updates the value of the count..
                setcount(count+1);
            }}>Increase Count</button>
        </div>
    )
}

export default User;
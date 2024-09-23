import { useState } from "react";
import { useEffect } from "react";

const User = ({ name , location }) => {

    const [count, setcount] = useState(0);

    useEffect(()=> {
        // API call
        const timer = setInterval(()=>{
            console.log("UseEffect called");
        }, 1000)

        return (()=>{
            clearInterval(timer);   // that's how cleanup is done in react, you have to clear the hanging intervals and eventListeners when component unmounted.
        })

    }, [])

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
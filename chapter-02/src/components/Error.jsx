import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    console.log(err);

    return (
        <div>
            <h1>Oops!!! Something went wrong</h1>
            <h3>Log the page to see the error details</h3>
            <h2>{err.status} {err.statusText}</h2>
        </div>
    )
}

export default Error;
import { useState, useEffect } from "react";



const useOnlineStatus = () => {

    const [status, setStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("online", function(){
            setStatus(true);
        });

        window.addEventListener("offline", function(){
            setStatus(false);
        })

    }, [])

    return status;
}

export default useOnlineStatus;
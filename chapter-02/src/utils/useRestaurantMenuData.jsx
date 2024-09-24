import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenuData = (id) => {

    const [resinfo, setresinfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(MENU_API+id);
        const json = await data.json();
        setresinfo(json.data);
    }

    return resinfo;
}

export default useRestaurantMenuData;

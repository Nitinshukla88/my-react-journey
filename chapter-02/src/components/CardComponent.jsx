import { useContext } from "react";
import {CDN_URL} from "../utils/constants"
import UserContext from "../utils/UserContext";

const CardComponent = (props) => {
    const { resdata } = props;
    console.log(resdata);

    const { loggedInUser } = useContext(UserContext);

    const { name, cuisines, avgRating, costForTwo } = resdata.info;
    return (
      <div className="h-90 w-60 m-3 p-4 border-2 border-solid border-black">
        <img
          src={CDN_URL + resdata.info.cloudinaryImageId}
          className="h-56 w-56"
        ></img>
        <h4>{name}</h4>
        <h4 className="overflow-hidden text-ellipsis whitespace-nowrap">{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4 className="font-bold">User : {loggedInUser}</h4>
      </div>
    );
  };


// We pass the props in higher order components using spread operator. 

export const withPromotedLabel = (CardCompoent) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black m-2 p-2 rounded-lg text-white">Promoted and Open</label>
        <CardCompoent {...props}/> 
      </div>
    )
  }
}

export default CardComponent;
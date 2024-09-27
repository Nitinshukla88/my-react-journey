import {CDN_URL} from "../utils/constants"

const CardCompoent = (props) => {
    const { resdata } = props;
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
      </div>
    );
  };

export default CardCompoent;
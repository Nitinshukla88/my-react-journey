import {CDN_URL} from "../utils/constants"

const CardCompoent = (props) => {
    const { resdata } = props;
    const { name, cuisines, avgRating, costForTwo } = resdata.info;
    return (
      <div className="rest-card">
        <img
          src={CDN_URL + resdata.info.cloudinaryImageId}
          className="card-img"
        ></img>
        <h4>{name}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };

export default CardCompoent;
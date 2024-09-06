import CardCompoent from "./CardComponent";
import restDetails from "../utils/mockData"

const Body = () => {
    return (
      <div className="res-container">
          {restDetails.map((resturant, index) => (
              <CardCompoent key = {resturant.info.id} resdata = {resturant}/>
          ))}
      </div>
    );
  };

export default Body;
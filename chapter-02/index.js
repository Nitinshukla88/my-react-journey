import React from "react";
import ReactDOM from "react-dom/client";

// This is a food ordering website resembling zomato and swiggy made with react..

//<---------------------------------------------------------------------------------------->

// Header componet

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-pizza-delivery-man-with-scooter_23-2147674445.jpg?t=st=1725557739~exp=1725561339~hmac=9bd151f427fc81437fd97dd482dc2eec0b76a61ec955383abdaa5531757dae16&w=740"
          className="logo-img"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Explore</li>
          <li>Help</li>
          <li>Cart</li>
          <li>Sign in</li>
        </ul>
      </div>
    </div>
  );
};

const restDetails = [
  {
    info: {
      id: "713248",
      name: "Pizza Wings",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/26/d112a6d7-d173-4ca7-a5ee-40f845719d18_713248.JPG",
      locality: "Indira Nagar",
      areaName: "Indira Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Veg", "Pizzza-king", "Maharaja-pizza"],
      avgRating: 4.3,
      parentId: "159048",
      avgRatingString: "4.3",
      totalRatingsString: "815",
      promoted: true,
      adTrackingId:
        "cid=18079560~p=1~adgrpid=18079560#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=713248~eid=f27be001-45c7-4812-9255-ba5693859c11~srvts=1725574075413~collid=45995",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 8.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "8.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-06 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.9",
          ratingCount: "4.3K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "747866",
      name: "The Terrace-Hotel Charans Plaza",
      cloudinaryImageId: "0cd4d1e98a6476d83437ac2684db5d68",
      locality: "Hazratganj",
      areaName: "Vidhansabha Marg",
      costForTwo: "₹300 for two",
      cuisines: ["Thalis", "North Indian", "Chinese", "Biryani"],
      avgRating: 4.1,
      parentId: "473114",
      avgRatingString: "4.1",
      totalRatingsString: "7.6K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-06 10:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "8.7K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "803172",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_803172.JPG",
      locality: "CHOWK",
      areaName: "Lucknow",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.4,
      parentId: "166",
      avgRatingString: "4.4",
      totalRatingsString: "2.2K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-06 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "637321",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/8d5d8f49-22b5-47ec-ab3b-7bcfc7a256ec_637321.jpg",
      locality: "Hardoi Road",
      areaName: "Daulatganj",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
      parentId: "721",
      avgRatingString: "4.2",
      totalRatingsString: "1.4K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-06 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                  description: "Delivery!",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
];

// card component

const CardCompoent = (props) => {
  const { resdata } = props;
  return (
    <div className="rest-card">
      <img
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resdata.info.cloudinaryImageId}
        className="card-img"
      ></img>
      <h4>{resdata.info.name}</h4>
      <h4>{resdata.info.cuisines.join(",")}</h4>
      <h4>{resdata.info.externalRatings.aggregatedRating.rating} stars</h4>
      <h4>{resdata.info.availability.opened ? "Open" : "Closed"}</h4>
    </div>
  );
};

// Body component

const Body = () => {
  return (
    <div className="res-container">
        {restDetails.map((resturant, index) => (
            <CardCompoent key = {resturant.info.id} resdata = {resturant}/>
        ))}
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="outer-cont">
      <Header />
      <Body />
    </div>
  );
};

// Creating the root for react elements to render

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<Applayout />);

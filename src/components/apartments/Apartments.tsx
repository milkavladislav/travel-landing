import React from "react";
import PartWrapper from "../common/PartWrapper/PartWrapper";
import "./Apartments.css";
import Filters from "./Filters";
import ReactStars from "react-stars";
import Bergen from "../../assets/apartments/Bergen.png";
import Norway from "../../assets/apartments/Norway.png";
import Reine from "../../assets/apartments/Reine.png";

interface IApartment {
  title: string;
  price: number;
  stars: number;
  photo: string;
}

const apartments: IApartment[] = [
  {
    title: "Reine",
    price: 720,
    stars: 5,
    photo: Reine,
  },
  {
    title: "Norway",
    price: 350,
    stars: 4,
    photo: Norway,
  },
  {
    title: "Bergen",
    price: 670,
    stars: 4.5,
    photo: Bergen,
  },
];

const Apartments = () => {
  return (
    <PartWrapper
      subtitle={"BEAUTIES"}
      title={"Hotels and Apartments"}
      id={"apartments"}
    >
      <>
        <div className="apartment__result-cards">
          {apartments.map(({ title, price, stars, photo }) => (
            <div className="apartment__card">
              <img src={photo} alt={title} />
              <div className="apartment__card-description">
                <header>{title}</header>
                <ReactStars
                  edit={false}
                  value={stars}
                  size={24}
                  color2="#FF9921"
                />
                <p>${price}</p>
              </div>
            </div>
          ))}
        </div>
        <Filters />
      </>
    </PartWrapper>
  );
};

export default Apartments;

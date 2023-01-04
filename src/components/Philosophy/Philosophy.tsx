import React from "react";
import PartWrapper from "../common/PartWrapper/PartWrapper";
import "./Philosophy.css";
import PhilosophyPhoto from "../../assets/philosophy.png";

interface IPhilosophyOption {
  name: string;
  content: string;
}

const philosophyOptions: IPhilosophyOption[] = [
  {
    name: "Sustainable",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl hendrerit, aliquet mi sed, scelerisque tortor Aliquam eu scelerisque quam, ac tristique dolor. Aliquam nulla risus,",
  },
  {
    name: "Fair & Share",
    content:
      "Lorem ipsum dolor sit amet, aliquet mi sed, scelerisque tortor Aliquam eu scelerisque quam, ac tristique dolor. Aliquam nulla risus,",
  },
  {
    name: "Experience",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam eu scelerisque quam, ac tristique ",
  },
];

const Philosophy = () => {
  return (
    <PartWrapper subtitle={"About Us"} title={"Our Philosophy"} id={"about-us"}>
      <div className="philosophy__content">
        <img
          src={PhilosophyPhoto}
          alt="philosophy"
          className="philosophy__photo"
        />
        <div className="philosophy__text-wrapper">
          {philosophyOptions.map(({ name, content }, index) => (
            <div className="philosophy__option">
              <h3>0{index + 1}</h3>
              <div className="philosophy__option-text">
                <h4>{name}</h4>
                <p>{content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PartWrapper>
  );
};

export default Philosophy;

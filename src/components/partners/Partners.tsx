import React from "react";
import PartWrapper from "../common/PartWrapper/PartWrapper";
import "./Partners.css";
import Lakehouse from "../../assets/partners/Lakehouse-logo_grey_0 1.png";
import Magento from "../../assets/partners/magento-grey-logo 1.png";
import Microsoft from "../../assets/partners/Microsoft-Logo-Grey 1.png";
import Midea from "../../assets/partners/Midea-Logo-grey 1.png";
import Comment from "../../assets/partners/comment.png";
import Avatar1 from "../../assets/partners/avatar1.png";
import Avatar2 from "../../assets/partners/avatar2.png";
import Avatar3 from "../../assets/partners/avatar3.png";

interface IPartner {
  photo: string;
}

interface IComment {
  avatar: string;
  name: string;
  position: string;
  text: string;
}

const partners: IPartner[] = [
  { photo: Microsoft },
  { photo: Magento },
  { photo: Lakehouse },
  { photo: Midea },
];

const comments: IComment[] = [
  {
    avatar: Avatar1,
    name: "Jane Cooper",
    position: "CEO, ABC Corporation",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem. consectetur adipiscing elit. nibh lectus feugiat nunc",
  },
  {
    avatar: Avatar2,
    name: "Alan Jackson",
    position: "CEO, Travelers Community",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem. consectetur adipiscing elit. ",
  },
  {
    avatar: Avatar3,
    name: "Stiven King",
    position: "CEO, Go Travel",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem. consectetur adipiscing elit. nibh lectus feugiat nunc",
  },
];

const Partners = () => {
  return (
    <PartWrapper subtitle={"Network"} title={"Our Partners"} id={"partners"}>
      <>
        <div className="partners__logos">
          {partners.map(({ photo }) => (
            <img src={photo} alt="" />
          ))}
        </div>
        <div className="comments">
          {comments.map(({ avatar, name, position, text }) => (
            <div className="comment__card">
              <img src={Comment} alt="" />
              <div className="comment__card-text">{text}</div>
              <div className="comment__card-commenter">
                <img src={avatar} alt="" />
                <div className="comment__card-commenter-about">
                  <h5>{name}</h5>
                  <p>{position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </PartWrapper>
  );
};

export default Partners;

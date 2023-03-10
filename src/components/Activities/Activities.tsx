import React from "react";
import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PartWrapper from "../common/PartWrapper/PartWrapper";

import Hiking from "../../assets/activities/Hiking.png";
import Kayaking from "../../assets/activities/Kayaking.png";
import Sailing from "../../assets/activities/Sailing.png";
import Skiing from "../../assets/activities/Skiing.png";
import Staycation from "../../assets/activities/Staycation.jpg";
import DuckTours from "../../assets/activities/DuckTours.jpg";
import Wildlife from "../../assets/activities/Wildlife.jpg";
import { useMediaQuery } from "react-responsive";

import "./Activities.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

interface IActivity {
  name: string;
  number: number;
  photo: string;
}

const activities: IActivity[] = [
  {
    name: "Hiking",
    number: 230,
    photo: Hiking,
  },
  {
    name: "Sailing",
    number: 121,
    photo: Sailing,
  },
  {
    name: "Skiing",
    number: 212,
    photo: Skiing,
  },
  {
    name: "Kayaking",
    number: 512,
    photo: Kayaking,
  },
  {
    name: "Staycation",
    number: 210,
    photo: Staycation,
  },
  {
    name: "Duck tours",
    number: 275,
    photo: DuckTours,
  },
  {
    name: "Wildlife",
    number: 154,
    photo: Wildlife,
  },
];

const Activities = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });
  return (
    <PartWrapper
      subtitle={"Hundred of"}
      title={"Activities for Everyone"}
      id={"activities"}
    >
      <Swiper
        className="slider"
        slidesPerView={isMobile ? 1.2 : 4}
        loop={true}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
      >
        {activities.map(({ name, number, photo }) => (
          <SwiperSlide>
            <img src={photo} alt={name} className="activity__card-img" />
            <div className="activity__card-text">
              <h4>{name}</h4>
              <p>{number} activities</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </PartWrapper>
  );
};

export default Activities;

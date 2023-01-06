import Nav from "../Nav/Nav";
import "./Main.css";
import Sweden from "../../assets/countries/Sweden.jpg";
import Norway from "../../assets/countries/Norway.png";
import Finland from "../../assets/countries/Finland.jpg";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiMapPin } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MainSocials from "./MainSocials";
import { CgArrowLongDown } from "react-icons/cg";

interface ITravelCite {
  name: string;
  link: string;
}

interface ITravelCountry {
  photo: string;
  name: string;
  topCities: [ITravelCite, ITravelCite, ITravelCite];
}

const travelCountries: ITravelCountry[] = [
  {
    photo: Norway,
    name: "Norway",
    topCities: [
      { name: "Trondheim", link: "https://en.wikipedia.org/wiki/Trondheim" },
      {
        name: "Geirangerfjord",
        link: "https://en.wikipedia.org/wiki/Geirangerfjord",
      },
      { name: "Lofoten", link: "https://en.wikipedia.org/wiki/Lofoten" },
    ],
  },
  {
    photo: Sweden,
    name: "Sweden",
    topCities: [
      { name: "Trondheim", link: "https://en.wikipedia.org/wiki/Trondheim" },
      {
        name: "Geirangerfjord",
        link: "https://en.wikipedia.org/wiki/Geirangerfjord",
      },
      { name: "Lofoten", link: "https://en.wikipedia.org/wiki/Lofoten" },
    ],
  },
  {
    photo: Finland,
    name: "Finland",
    topCities: [
      { name: "Trondheim", link: "https://en.wikipedia.org/wiki/Trondheim" },
      {
        name: "Geirangerfjord",
        link: "https://en.wikipedia.org/wiki/Geirangerfjord",
      },
      { name: "Lofoten", link: "https://en.wikipedia.org/wiki/Lofoten" },
    ],
  },
];

const Main = () => {
  return (
    <header>
      <Swiper
        className="slider"
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {travelCountries.map(({ photo, name, topCities }) => (
          <SwiperSlide className="slider__container">
            <div className="title__block">
              <h3>Explore</h3>
              <h2>{name}</h2>
            </div>
            <div className="city__wrapper">
              {topCities.map(({ name, link }) => (
                <a
                  className="city__card"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiMapPin className="city__card-icon" />
                  <div className="city__card-text">
                    <h4>{name}</h4>
                    <p>Plan a trip</p>
                  </div>
                </a>
              ))}
            </div>
            <img className="slider__photo" src={photo} alt="Norway" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Nav />
      <MainSocials />
      <a className="seeMore__link" href="#activities">
        <CgArrowLongDown className="seeMore__link-arrow" />
        See More
      </a>
    </header>
  );
};

export default Main;

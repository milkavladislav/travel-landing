import Nav from "../Nav/Nav";
import "./Main.css";
import SlidePhoto from "../../assets/background.png";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiMapPin } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
        {Array(4)
          .fill(null)
          .map(() => (
            <SwiperSlide className="slider__container">
              <div className="title__block">
                <h3>Explore</h3>
                <h2>Norway</h2>
              </div>
              <div className="city__wrapper">
                {Array(3).fill(null).map(() => (
                  <a
                    className="city__card"
                    href="https://en.wikipedia.org/wiki/Norway"
                  >
                    <FiMapPin className="city__card-icon" />
                    <div className="city__card-text">
                      <h4>Trondheim</h4>
                      <p>Plan a trip</p>
                    </div>
                  </a>
                ))}
              </div>
              <img className="slider__photo" src={SlidePhoto} alt="Norway" />
            </SwiperSlide>
          ))}
      </Swiper>
      <Nav />
    </header>
  );
};

export default Main;

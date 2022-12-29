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
        <SwiperSlide className="slider__container">
          <div className="title__block">
            <h3>Explore</h3>
            <h2>Norway</h2>
          </div>
          <div className="city__wrapper">
            <a className="city__card" href="">
              <FiMapPin />
              <h4 className="city__card-title">Trondheim</h4>
              <p>Plan a trip</p>
            </a>
            <a className="city__card" href="">
              <FiMapPin />
              <h4 className="city__card-title">Trondheim</h4>
              <p>Plan a trip</p>
            </a>
            <a className="city__card" href="">
              <FiMapPin />
              <h4 className="city__card-title">Trondheim</h4>
              <p>Plan a trip</p>
            </a>
          </div>
          <img className="slider__photo" src={SlidePhoto} />
        </SwiperSlide>
        <SwiperSlide className="slider__container">
          <div className="title__block">
            <h3>Explore</h3>
            <h2>Norway</h2>
          </div>
          <div className="city__wrapper">
            <a className="city__card" href="">
              <FiMapPin />
              <h4 className="city__card-title">Trondheim</h4>
              <p>Plan a trip</p>
            </a>
            <a className="city__card" href="">
              <FiMapPin />
              <h4 className="city__card-title">Trondheim</h4>
              <p>Plan a trip</p>
            </a>
            <a className="city__card" href="">
              <FiMapPin />
              <h4 className="city__card-title">Trondheim</h4>
              <p>Plan a trip</p>
            </a>
          </div>
          <img className="slider__photo" src={SlidePhoto} />
        </SwiperSlide>
        <SwiperSlide className="slider__container">
          <div className="title__block">
            <h3>Explore</h3>
            <h2>Norway</h2>
          </div>
          <div className="city__wrapper">
            <a className="city__card" href="">
              <FiMapPin className="city__card-icon" />
              <div className="city__card-text">
                <h4>Trondheim</h4>
                <p>Plan a trip</p>
              </div>
            </a>
            <a className="city__card" href="">
              <FiMapPin className="city__card-icon" />
              <div className="city__card-text">
                <h4>Trondheim</h4>
                <p>Plan a trip</p>
              </div>
            </a>
            <a className="city__card" href="">
              <FiMapPin className="city__card-icon" />
              <div className="city__card-text">
                <h4>Trondheim</h4>
                <p>Plan a trip</p>
              </div>
            </a>
          </div>
          <img className="slider__photo" src={SlidePhoto} />
        </SwiperSlide>
      </Swiper>
      <Nav />
    </header>
  );
};

export default Main;

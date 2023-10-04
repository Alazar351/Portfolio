import { Swiper, SwiperSlide } from "swiper/react";
import html from "../Icons/html-5.png";
import css from "../Icons/css-3.png";
import react from "../Icons/physics.png";
import js from "../Icons/js.png";
import "../styles/swiper.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function MySwiper() {
  return (
    <div className="wrapper">
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <div className="container">
            <div className="desc">
              <h2>Recipree</h2>
              <p>
                Recipree is a dynamic recipe app crafted with HTML, CSS, and
                React. This culinary companion offers a multitude of features,
                including a discovery page showcasing various cuisines and a
                well-organized favorites section. With a sophisticated search
                function and categorization by meal type, users can easily find
                their desired recipes.
              </p>
              <img src={html} />
              <img src={css} />
              <img src={react} />
            </div>
            <div className="link">
              <a href="https://recipree.netlify.app/" target="_blank">
                Live Site
              </a>
              <a
                href="https://github.com/Alazar351/Recipree"
                className="github"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="container">
            <div className="desc">
              <h2>Hydration</h2>
              <p>
                Hydration: A Chrome Extension dedicated to your wellness. Set
                your water intake goals and available time. Choose from three
                reminder frequencies. Stay on track with start, pause, and
                restart buttons. Receive timely Chrome notifications, ensuring
                you're always refreshed and hydrated.
              </p>
              <img src={html} />
              <img src={css} />
              <img src={js} />
            </div>
            <div className="link">
              <a href="https://github.com/Alazar351/Hydration" target="_blank">
                Github
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/*
        <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 5</SwiperSlide> */}
      </Swiper>
    </div>
  );
}

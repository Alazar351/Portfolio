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
              <h2>Modern Webpage</h2>
              <p>A responsive modern webpage built with Shadcn & Tailwind</p>
              <img src={html} />
              <img src={css} />
            </div>
            <div className="link">
              <a href="https://modern-webpage.vercel.app/" target="_blank">
                Live Site
              </a>
              <a
                href="https://github.com/Alazar351/modern-website"
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
              <h2>Oxelar Landing Page</h2>
              <p>
                A modern e-commerce landing page built based on a design sourced
                on the internet.
              </p>
              <img src={html} />
              <img src={css} />
              <img src={react} />
            </div>
            <div className="link">
              <a
                href="https://oxelar-landing-page.netlify.app/"
                target="_blank"
              >
                Live Site
              </a>
              <a
                href="https://github.com/Alazar351/e-Commerce-Landing-Page/tree/master"
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
      </Swiper>
    </div>
  );
}

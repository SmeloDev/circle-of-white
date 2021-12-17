import './Hero.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import heroBackgroundPoster from './data/heroBackgroundPoster.png';
import heroBackgroundVideo from './data/hero_background_magic.mp4';
import { ReactComponent as CartIcon } from './data/cart.svg';

// import shortid from 'shortid';

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    customPaging: i => (
      <button className={{ backgroundColor: '#000' }}> {i + 1} </button>
    ),
  };

  return (
    <>
      <div className="hero">
        <video
          autoPlay
          poster={heroBackgroundPoster}
          preload="auto"
          muted
          loop
          id="heroVideo"
        >
          <source src={heroBackgroundVideo} type="video/mp4" />
          Тег video не поддерживается вашим браузером.
        </video>
        <div className="container_for_slider">
          <Slider {...settings}>
            <div>
              <div className="hero_slider_item">
                <div className="hero-item-heading">
                  <h2>Медитативные практики 1</h2>
                  <h4>для жизни</h4>
                </div>
                <div className="hero_cart_container">
                  <h4>Курс «Основы Усиления Личности»</h4>
                  <ul className="hero-cart-list">
                    <li>укрепление личности</li>
                    <li>
                      подготовка и накопление ресурса для нового этапа жизни
                    </li>
                    <li>скорая помощь</li>
                  </ul>
                  <div className="cart-icon">
                    <CartIcon />
                  </div>
                </div>
                <div className="slider_image"></div>
              </div>
            </div>

            <div>
              <div className="hero_slider_item">
                <div className="hero-item-heading">
                  <h2>Медитативные практики 2</h2>
                  <h4>для жизни</h4>
                </div>
                <div className="hero_cart_container">
                  <h4>Курс «Границы моего Я»</h4>
                  <div className="cart-icon">
                    <CartIcon />
                  </div>
                </div>
                <div className="slider_image"></div>
              </div>
            </div>

            <div>
              <div className="hero_slider_item">
                <div className="hero-item-heading">
                  <h2>Медитативные практики 3</h2>
                  <h4>для жизни</h4>
                </div>
                <div className="hero_cart_container">
                  <h4>Курс «Границы твоего Я»</h4>
                  <div className="cart-icon">
                    <CartIcon />
                  </div>
                </div>
                <div className="slider_image"></div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Hero;

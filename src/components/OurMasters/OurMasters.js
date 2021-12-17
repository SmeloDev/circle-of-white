import './OurMasters.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import shortid from 'shortid';

function OurMasters() {
  const settings = {
    infinite: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 800,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // pauseOnFocus: true,
    // pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: i => (
      <button className={{ backgroundColor: '#000' }}> {i + 1} </button>
    ),
  };

  return (
    <>
      <div className="our-masters-section">
        <div className="container_for_slider">
          <h4>команда школы</h4>
          <h2>НАШИ МАСТЕРА</h2>
          <Slider {...settings}>
            <div className="masters_slider_item">
              <div className="content-container first-container">
                <div className="master-photo first-photo"></div>
                <h2>ТАТЬЯНА ЛУБАНОВА</h2>
                <h4>ОСНОВАТЕЛЬ ШКОЛЫ</h4>
                <a href="#">
                  подробнее
                  <span>
                    &#11049;&#11049;<b>&#10230;</b>
                  </span>
                </a>
              </div>
            </div>

            <div className="masters_slider_item">
              <div className="content-container">
                <div className="master-photo second-photo"></div>
                <h2>НАТАЛЬЯ МИЛОВИДОВА</h2>
                <h4>СООСНОВАТЕЛЬ ШКОЛЫ</h4>
                <a href="#">
                  подробнее
                  <span>
                    &#11049;&#11049;<b>&#10230;</b>
                  </span>
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default OurMasters;

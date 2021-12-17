import './ServicesSection.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import heroBackgroundPoster from './data/heroBackgroundPoster.png';
// import { ReactComponent as CartIcon } from './data/cart.svg';

// import shortid from 'shortid';

function ServicesSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="services-section">
        <div className="container_for_slider">
          <Slider {...settings}>
            <div>
              <div className="services_slider_item">
                <div className="back-wrapper first-wrap">
                  <div className="item-background"></div>
                  <div className="content-container">
                    <div className="item-count">
                      <div className="count-circle">
                        <span>1</span>
                      </div>
                    </div>
                    <h2>Диагностика</h2>
                    <h4>
                      считывание на тонком плане какими энергиями обладает
                      человек, какой частоты, определение возможностей и ресурса
                      человека
                    </h4>
                    <a href="#">
                      Смотреть
                      <span>
                        &#11049;&#11049;<b>&#10230;</b>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="services_slider_item">
                <div className="back-wrapper second-wrap">
                  <div className="item-background"></div>
                  <div className="content-container">
                    <div className="item-count">
                      <div className="count-circle">
                        <span>2</span>
                      </div>
                    </div>
                    <h2>Наработка Качеств</h2>
                    <h4>
                      программы и практики, направленные на ускоренное
                      восстановление потерянных качеств, энергии, состояний. И
                      наработку новых, необходимых под реализацию текущего
                      запроса
                    </h4>
                    <a href="#">
                      Смотреть
                      <span>
                        &#11049;&#11049;<b>&#10230;</b>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="services_slider_item">
                <div className="back-wrapper third-wrap">
                  <div className="item-background"></div>
                  <div className="content-container">
                    <div className="item-count">
                      <div className="count-circle">
                        <span>3</span>
                      </div>
                    </div>
                    <h2>Раскрытие потенциала</h2>
                    <h4>
                      программы, которые раскрывают личность, дают новые смыслы
                      и выводят на требуемый уровень в жизни, отношениях,
                      бизнесе, творчестве, магии
                    </h4>
                    <a href="#">
                      Смотреть
                      <span>
                        &#11049;&#11049;<b>&#10230;</b>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ServicesSection;

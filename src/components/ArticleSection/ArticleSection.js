import './ArticleSection.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import heroBackgroundPoster from './data/heroBackgroundPoster.png';
// import { ReactComponent as CartIcon } from './data/cart.svg';

// import shortid from 'shortid';

function ArticleSection() {
  const settings = {
    infinite: true,
    dots: true,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '10px',
    className: 'center',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // pauseOnFocus: true,
    // pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="article-masters-section">
        <div className="container_for_slider">
          <Slider {...settings}>
            <div>
              <div id="345" className="article_slider_item">
                <div className="article-photo"></div>
                <div className="content-container">
                  <h4>Статьи</h4>
                  <h2>Высшая магия</h2>
                  <p>
                    Диагностика по стихийным прошивкам — это определение
                    способностей и опыта удерживать, фиксировать и использовать
                    свои качества по таким параметрам:
                  </p>
                  <a href="#">
                    подробнее
                    <span>
                      &#11049;&#11049;<b>&#10230;</b>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div id="345" className="article_slider_item">
                <div className="article-photo"></div>
                <div className="content-container first-container">
                  <h4>Статьи</h4>
                  <h2>Высшая магия</h2>
                  <p>
                    Диагностика по стихийным прошивкам — это определение
                    способностей и опыта удерживать, фиксировать и использовать
                    свои качества по таким параметрам:
                  </p>
                  <a href="#">
                    подробнее
                    <span>
                      &#11049;&#11049;<b>&#10230;</b>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div id="345" className="article_slider_item">
                <div className="article-photo"></div>
                <div className="content-container first-container">
                  <h4>Статьи</h4>
                  <h2>Высшая магия</h2>
                  <p>
                    Диагностика по стихийным прошивкам — это определение
                    способностей и опыта удерживать, фиксировать и использовать
                    свои качества по таким параметрам:
                  </p>
                  <a href="#">
                    подробнее
                    <span>
                      &#11049;&#11049;<b>&#10230;</b>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div id="345" className="article_slider_item">
                <div className="article-photo"></div>
                <div className="content-container first-container">
                  <h4>Статьи</h4>
                  <h2>Высшая магия</h2>
                  <p>
                    Диагностика по стихийным прошивкам — это определение
                    способностей и опыта удерживать, фиксировать и использовать
                    свои качества по таким параметрам:
                  </p>
                  <a href="#">
                    подробнее
                    <span>
                      &#11049;&#11049;<b>&#10230;</b>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div id="345" className="article_slider_item">
                <div className="article-photo"></div>
                <div className="content-container first-container">
                  <h4>Статьи</h4>
                  <h2>Высшая магия</h2>
                  <p>
                    Диагностика по стихийным прошивкам — это определение
                    способностей и опыта удерживать, фиксировать и использовать
                    свои качества по таким параметрам:
                  </p>
                  <a href="#">
                    подробнее
                    <span>
                      &#11049;&#11049;<b>&#10230;</b>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ArticleSection;

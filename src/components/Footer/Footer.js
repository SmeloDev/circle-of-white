import './Footer.css';
import React from 'react';
import { ReactComponent as Logo } from './data/logo.svg';
import { ReactComponent as MiddleLine } from './data/middle-line.svg';
import { ReactComponent as Facebook } from './data/facebook.svg';
import { ReactComponent as Instagram } from './data/instagram.svg';
import { ReactComponent as Youtube } from './data/youtube.svg';
import { ReactComponent as Smelo } from './data/smelo.svg';

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="upper-footer">
          <div className="logo">
            <Logo />
          </div>
        </div>
        <div className="middle-line">
          <MiddleLine />
        </div>
        <div className="lower-footer">
          <ul>
            <li className="social-networks">
              <div>
                <a href="">
                  <Facebook />
                </a>
                <a href="">
                  <Instagram />
                </a>
                <a href="">
                  <Youtube />
                </a>
              </div>
            </li>
            <li className="privacy-policy">
              <a href="">Политика конфиденциальности</a>
              &#11049;
              <a href="">Договор оферты</a>
            </li>
            <li className="by-smelo">
              <a href="https://smelo.com.ua/">
                by <Smelo />
              </a>
              <span>&#11049;</span>
              <a href="">Circle of White ©2021 All Rights Reserved</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;

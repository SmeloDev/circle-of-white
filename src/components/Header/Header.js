import './Header.css';
import React from 'react';
import { ReactComponent as Logo } from './data/logo.svg';
import { ReactComponent as Search } from './data/search_icon.svg';
import { ReactComponent as Heart } from './data/heart_icon.svg';
import { ReactComponent as Person } from './data/person_icon.svg';
import { ReactComponent as Cart } from './data/cart_icon.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div id="header">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div class="left-side-container">
          <ul>
            <li class="mobile-hidden">
              <a href="">о школе</a>
            </li>
            <li class="mobile-hidden">
              <a href="">наши мастера</a>
            </li>
            <li class="mobile-hidden">
              <a href="">услуги +</a>
            </li>
            <li class="mobile-hidden">
              <a href="">расписание</a>
            </li>
            <li class="icons-group desctop-hidden">
              <a href="" class="icon">
                <Heart />
              </a>
              <a href="" class="icon">
                <div class="proba"></div>
                {/* <Search /> */}
              </a>
            </li>
          </ul>
        </div>
        <div class="right-side-container">
          <ul>
            <li class="mobile-hidden">
              <a href="">полезное</a>
            </li>
            <li class="mobile-hidden">
              <Link to="/contacts">контакты</Link>
              {/* <a href="">контакты</a> */}
            </li>
            <li class="icons-group">
              <a href="" class="icon mobile-hidden">
                <div class="proba"></div>
                {/* <Search /> */}
              </a>
              <a href="" class="icon mobile-hidden">
                <Heart />
              </a>
              <a href="" class="icon icon-person">
                <Person />
              </a>
              <a href="" class="icon icon-cart">
                <Cart />
                <div class="cart-count">2</div>
              </a>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Header;

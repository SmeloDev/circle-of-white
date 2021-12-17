import './AddressSection.css';
import React from 'react';

function AddressSection() {
  return (
    <>
      <div className="address-section">
        <div class="our-address-link">
          <h4>кликни чтобы проложить маршрут к нам</h4>
          <a>
            <div class="contacts-icon">
              <div class="icon-circle"></div>
            </div>
          </a>
        </div>

        <a href="tel:+380939141108">+38 (093) 914 11 08</a>
        <p>Киев, пр-т Воздухофлотский, 25, 2 подъезд, 2 эт., оф. 14</p>

        <h2>ждем тебя в гости</h2>
      </div>
    </>
  );
}

export default AddressSection;

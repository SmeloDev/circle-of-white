import './Contacts.css';
import React from 'react';
import AddressSection from '../../components/AddressSection/AddressSection';
import WriteUsSection from '../../components/WriteUsSection/WriteUsSection';

function Contacts() {
  return (
    <>
      <div id="contacts_page">
        <section class="upper-section">
          <div class="address-container">
            <AddressSection />
          </div>
          <div class="map-container"></div>
        </section>
        <section class="lower-section">
          <div class="write-us-container">
            <WriteUsSection />
          </div>
          <div class="paint-container"></div>
        </section>
      </div>
    </>
  );
}

export default Contacts;

import './ContactsMain.css';
import React from 'react';
import WriteUsSection from '../WriteUsSection/WriteUsSection';
import AddressSection from '../AddressSection/AddressSection';

function ContactsMain() {
  return (
    <>
      <div className="сontacts-main-section">
        <div class="address-block">
          <AddressSection />
        </div>
        <div class="write-us-block">
          <WriteUsSection />
        </div>
      </div>
    </>
  );
}

export default ContactsMain;

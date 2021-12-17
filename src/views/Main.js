import React from 'react';
import Hero from '../components/Hero/Hero';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import OurSchoolSection from '../components/OurSchoolSection/OurSchoolSection';
import OurMasters from '../components/OurMasters/OurMasters';
import ArticleSection from '../components/ArticleSection/ArticleSection';
import ContactsMain from '../components/ContactsMain/ContactsMain';

function Main() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <OurSchoolSection />
      <OurMasters />
      <ArticleSection />
      <ContactsMain />
    </>
  );
}

export default Main;

import Header from '@/Components/Header';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import WhyChooseMe from '@/Components/WhyChooseMe';
import Footer from '@/Components/Footer';
import Skills from '@/Components/Skills';
import ContactPage from '@/app/ContactPage'
import Portfolio from '../Components/portfolio';
import BackToTop from '@/Components/BackToTop';

const page = () => {
  return (
   <div>
    <Header/>
    <Skills/>
    <Portfolio/>
    <WhyChooseMe/>
    <div>
    <ContactPage/>
    <Footer/>

    <BackToTop/>
    </div>
   </div>
  )
}

export default page



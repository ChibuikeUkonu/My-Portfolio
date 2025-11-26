import Header from '@/Components/Header';
import React from 'react';
import About from './About';
import Projects from '@/Components/Projects';
import '@fortawesome/fontawesome-free/css/all.min.css';
import WhyChooseMe from '@/Components/WhyChooseMe';
import Footer from '@/Components/Footer';
import Skills from '@/Components/Skills';
import ContactPage from '@/app/ContactPage'

const page = () => {
  return (
   <div>
    <Header/>
    <Skills/>
    <Projects/>
    <WhyChooseMe/>
    <div>
    <ContactPage/>
    <Footer/>
    </div>
   </div>
  )
}

export default page



   "use client"
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Header.module.css'
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import { useRef } from 'react';


const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  return (
   <header>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.logo}style={{color: '#86b0eb'}}>Chibuike U<span>.</span></div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#Header" onClick={closeMenu}>Home</a></li>
            <li><a href="#WhyChooseMe" onClick={closeMenu}>WhyChooseMe</a></li>
            <li><a href="#WhyChooseMe" onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
          <div className={styles.menu_toggle} onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </div>

      <div className={styles.Main_head}>
        <div className={styles.image_content}>

          <img src="./Excl.jpg" alt="Chibuike Ukonu - Full Stack Developer" />
          <p>
            Welcome to my portfolio! I'm a passionate <strong>full-stack developer</strong> with
            over 1 year of experience creating beautiful, functional websites.
            I have experience in HTML | CSS | JavaScript | Node.js | MongoDB
          </p>
        </div>
        
        <div className={styles.download}>
          <a 
            href="https://www.dropbox.com/scl/fi/m7gqqpgh54qwhlpkwfwpf/CHIBUIKE-UKONU-1.pdf?rlkey=aen2gont57lowxvmvlh2f2lok&st=hd8ulnvy&dl=1" 
            download="CHIBUIKE-UKONU-CV.pdf"
          >
            Download CV
          </a>
        </div>
        
      </div>
    </header>
  )
}

export default Header

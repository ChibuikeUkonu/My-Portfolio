"use client"

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Header.module.css'
import Link from 'next/link';
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState, useEffect, useRef } from 'react';
import { FaDownload } from "react-icons/fa";

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [isScrolled, setIsScrolled] = useState(false)
   const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu when clicking outside
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (menuRef.current && event.target instanceof Node && !menuRef.current.contains(event.target) && isMenuOpen) {
      closeMenu();
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [isMenuOpen, closeMenu]);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
   <header className={styles.header}>
      <div className={`${styles.navbar_container} ${isScrolled ? styles.scrolled : ''}`}>
        <nav className={styles.navbar}>
          <div className={styles.logo} style={{color: '#86b0eb'}}>Chibuike U<span>.</span></div>
          
          {/* Desktop Menu */}
          <ul className={styles.nav_links_desktop}>
            <li><a href="#" onClick={closeMenu}>Home</a></li>
            <li><a href="#WhyChooseMe" onClick={closeMenu}>Why Choose Me</a></li>
            <li><a href="#Skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className={styles.menu_toggle} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>

          {/* Mobile Menu Overlay */}
          <div className={`${styles.mobile_menu_overlay} ${isMenuOpen ? styles.active : ''}`}>
            <ul 
              ref={menuRef}
              className={`${styles.nav_links_mobile} ${isMenuOpen ? styles.active : ''}`}
            >
              <li><a href="#" onClick={closeMenu}>Home</a></li>
              <li><a href="#WhyChooseMe" onClick={closeMenu}>Why Choose Me</a></li>
              <li><a href="#Skills" onClick={closeMenu}>Skills</a></li>
              <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className={styles.Main_head}>
        <div className={styles.content_wrapper}>
          {/* Image Section */}
          <div className={styles.image_section}>
            <div className={styles.image_container}>
              <Image 
                src="/Ukbillion1.jpg" 
                alt="Chibuike Ukonu - Full Stack Developer" 
                width={400}
                height={500}
                className={styles.profile_image}
                priority
              />
            </div>
          </div>

          {/* Text Section */}
          <div className={styles.text_section}>
            {/* Download CV Button */}
            <div className={styles.download_section}>
              <a 
                href="https://www.dropbox.com/scl/fi/m7gqqpgh54qwhlpkwfwpf/CHIBUIKE-UKONU-1.pdf?rlkey=aen2gont57lowxvmvlh2f2lok&st=hd8ulnvy&dl=1" 
                className={styles.download_btn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload className={styles.download_icon} />
                Download CV
              </a>
            </div>

            {/* Welcome Text */}
            <div className={styles.welcome_text}>
              <h1 className={styles.greeting}>Hi, I'm Chibuike</h1>
              <p className={styles.introduction}>
                Welcome to my portfolio! I'm a passionate <strong>full-stack developer</strong> with
                over 1 year of experience creating beautiful, functional websites.
                I specialize in <strong>HTML | CSS | JavaScript | Node.js | MongoDB</strong> 
                and building modern web applications. I love turning ideas into reality through code,
                and am always eager to learn new technologies and take on exciting projects,
               and also I am a skilled <strong>Aws cloud practitioner</strong> so feel free to explore my work and get in touch!
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
   "use client"
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Header.module.css'
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import { useRef } from 'react';


const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Navbar}>
        <ul>
        <Link href='#'>Home</Link>
        <Link href='#'>Contact</Link>
        <Link href='#'>Portfolio</Link>
        <Link href='#'>Certificate</Link>
        </ul>
        {/* <Image className={styles.hamburg} src='/hamburger.png'onClick={toggleMenu}width={30}height={30} alt="" />
        <ul 
        ref={menuRef}
        className={`${styles.nav_menu} ${isMenuOpen ? styles.active : ''}`}/>
      <Image className={styles.nav_mob_close} src='./menu.png'onClick={toggleMenu}width={30}height={30} alt="" /> */}
      </div>

      <div className={styles.Main_head}>
        <div className={styles.image_content}>
          <img src="./Excl.jpg" alt="image" />
          <p>Welcome to my portfolio! I'm a passionate <strong >full-stack developer</strong> with
             over 1 year of experience creating beautiful, functional websites,
              I have experience in Html |CSS| JavaScript| node Js| Mongo DB</p>
        </div>
          <div className={styles.download}>
          <a href="https://www.dropbox.com/scl/fi/m7gqqpgh54qwhlpkwfwpf/CHIBUIKE-UKONU-1.pdf?rlkey=aen2gont57lowxvmvlh2f2lok&st=hd8ulnvy&dl=1" download="CHIBUIKE UKONU.pdf">
    Download Your CV
    </a>
       </div>
    </div>
          <div className={styles.logo}>
            <h1>Chibuike U.</h1>
            </div>
      </div>
  )
}

export default Header

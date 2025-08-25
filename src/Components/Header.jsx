import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Header.module.css'
import Link from 'next/link';
import { MdOutlineFileDownload } from "react-icons/md";


const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Navbar}>
        <ul>
        <Link href='#'>Home</Link>
        <Link href='#'>About</Link>
        <Link href='#'>Contact</Link>
        <Link href='#'>Portfolio</Link>
        <Link href='#'>Certificate</Link>
        </ul>
      </div>
      <div className={styles.Main_head}>
        <div className={styles.image_content}>
          <img src="./Excl.jpg" alt="image" />
          <p>Welcome to my portfolio! I'm a passionate <strong >full-stack developer</strong> with
             over 1 year of experience creating beautiful, functional websites.</p>
        </div>
          <div className={styles.download}>
          <a href="https://www.dropbox.com/scl/fi/m7gqqpgh54qwhlpkwfwpf/CHIBUIKE-UKONU-1.pdf?rlkey=aen2gont57lowxvmvlh2f2lok&st=hd8ulnvy&dl=1" download="CHIBUIKE UKONU.pdf">
    Download Your CV
    </a>
       </div>
    </div>
      </div>
  )
}

export default Header

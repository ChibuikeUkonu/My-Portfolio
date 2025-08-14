import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Header.module.css'
import Link from 'next/link';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Navbar}>
        <Link href='#'>Home</Link>
        <Link href='#'>Contact</Link>
        <Link href='#'>Portfolio</Link>
        <Link href='#'>Certificate</Link>
      </div>
    </div>
  )
}

export default Header

import React from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.Abouts}>
    <div className={styles.infomation}>
      <h1>Services I provide</h1>
    </div>
      <div className={styles.services}>
    <h2>Services</h2>
    <p>I offer comprehensive web development services including custom website design, 
      responsive development, e-commerce solutions and ongoing maintenance. 
      With a focus on user experience and functionality,
       I create dynamic digital experiences tailored to your needs.</p>
    </div>
    </div>
  )
}

export default About

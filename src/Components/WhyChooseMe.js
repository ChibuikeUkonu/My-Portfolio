   "use client"
import React from 'react'
import style from './WhyChooseMe.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';

const WhyChooseMe = () => {
  const reasons = [
    {
      icon: 'fas fa-bolt',
      title: 'Seamless Projects',
      description: 'I deliver projects with smooth functionality, intuitive interfaces, and flawless performance across all devices and platforms.'
    },
    {
      icon: 'fas fa-code',
      title: 'Expert in Modern Tech',
      description: 'Proficient in HTML, CSS, JavaScript, and MongoDB with expertise in modern frameworks and libraries for robust applications.'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Fast Delivery',
      description: 'I prioritize efficient workflows and timely delivery without compromising on quality or attention to detail.'
    },
    {
      icon: 'fas fa-headset',
      title: 'Dedicated Support',
      description: 'I provide ongoing support and maintenance to ensure your digital solutions continue to perform optimally.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovative Solutions',
      description: 'I approach each project with creativity and problem-solving skills to deliver unique, effective digital solutions.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Business Focused',
      description: 'My development approach always considers your business goals to create solutions that drive growth and success.'
    }
  ]

  return (
    <section className={style.whychoose} id="WhyChooseMe">
      <div className="container">
        <h2>Why Choose Chibuike?</h2>
        <div className={style.reasons}>
          {reasons.map((reason, index) => (
            <div key={index} className={style.reasoncard}>
              <div className={style.reasonicon}>
                <i className={reason.icon}></i>
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseMe

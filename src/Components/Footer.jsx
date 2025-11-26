import React from 'react'
import style from '@/styles/Footer.module.css'

const Footer = () => {
 return (
    <footer>
      <section className={style.container}>
        <div className={style.footer_content}>
          <div className={style.footer_about}>
            <div className={style.footer_logo}>Chibuike<span>.</span></div>
            <p>Full-stack developer crafting digital experiences that drive results and exceed expectations.</p>
            <div className={style.social_links}>
              <a href="https://x.com/chibykeukonu?t=Vk4rstdofNENNxgU52WVgw&s=09" className={style.social_link}><i className="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com/in/chibuike-ukonu-7582ab35a/" className={style.social_link}><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/ChibuikeUkonu" className={style.social_link}><i className="fab fa-github"></i></a>
              <a href="https://wa.me/+2349165933656" className={style.social_link}><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>
          <div className={style.footer_links}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="home">Home</a></li>
              <li><a href="WhyChooseMe">WhyChooseMe</a></li>
              <li><a href="skills">Skills</a></li>
              <li><a href="Projects">Projects</a></li>
              <li><a href="Contact">Contact</a></li>
            </ul>
          </div>
          <div className={style.footer_link}>
            <h3>Services</h3>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">App Development</a></li>
              <li><a href="#">Database Design</a></li>
              <li><a href="#">Consultation</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Chibuike. All Rights Reserved.</p>
          <p>Designed / Developed By Chibuike Ukonu Igbe</p>
        </div>
      </section>
    
    </footer>
  )
}
export default Footer

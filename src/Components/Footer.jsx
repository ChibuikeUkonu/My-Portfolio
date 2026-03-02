import React from 'react'
import style from '@/styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
 return (
    <footer>
      <section className={style.container}>
        <div className={style.footer_content}>
          <div className={style.footer_about}>
            <div className="flex flex-col items-center">

  {/* Image Container */}
  <div className="relative w-[300px] h-[300px] overflow-hidden rounded-full">
    <Image 
      src="/Brown.jpg" 
      alt="Chibuike Ukonu - Full Stack Developer" 
      fill
      className={style.footer_image}
      priority
    />
  </div>

  {/* Text */}
  <div className={style.footer_logo}>
    Chibuike<span>.</span>
  </div>

</div>
            <p className={style.paragrah}>Full-stack developer crafting digital experiences that drive results and exceed expectations.</p>
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
              <li><a href="#">Home</a></li>
              <li><a href="WhyChooseMe">WhyChooseMe</a></li>
              <li><a href="Skills">Skills</a></li>
              <li><a href="Projects">Projects</a></li>
              <li><a href="contact">Contact</a></li>
            </ul>
          </div>
          <div className={style.footer_link}>
            <h3>Services</h3>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">App Development</a></li>
              <li><a href="#">Database Design</a></li>
              <li><a href="#">Consultation</a></li>
              <li><a href="#">Cloud Computing</a></li>
            </ul>
          </div>
        </div>
        <div className={style.copyright}>
          <p>&copy; 2026 Chibuike. All Rights Reserved.</p>
          <p>Developed By Chibuike Ukonu Igbe</p>
        </div>
      </section>
    
    </footer>
  )
}
export default Footer

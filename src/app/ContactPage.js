'use client'
import { useState } from 'react'
import style from '@/styles/ContactPage.module.css'
import React from 'react'

const ContactPage = () => {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const accessKey = 'd35c9462-c9c9-491c-aa3d-4d74084de468';
    
    const web3FormData = {
      access_key: accessKey,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(web3FormData)
      });

      const result = await response.json();

      if (result.success) {
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        alert('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      alert('Sorry, there was an error sending your message. Please try again.');
    }
  };

  return (
    <section className={style.contact} id="contact">
      <div className={style.container}>
        <h2>Get In Touch</h2>
        <div className={style.contact_container}>
          <div className={style.contact_info}>
            <h3>Let's Discuss Your Project</h3>
            <h1>I'm currently available for freelance work and full-time positions. Reach out and let's build something amazing together.</h1>
            <div className={style.contact_item}>
              <div className={style.contact_icon}>
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4>Email</h4>
                <p>chibykeigbe@gmail.com</p>
              </div>
            </div>
            <div className={style.contact_item}>
              <div className={style.contact_icon}>
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h4>Phone</h4>
                <p>+2349165933656,+2347043678668</p>
              </div>
            </div>
            <div className={style.contact_item}>
              <div className={style.contact_icon}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4>Location</h4>
                <p>Nigeria</p>
              </div>
            </div>
          </div>
          <div className={style.contact_form}>
            <form onSubmit={handleSubmit}>
              <div className={style.form_group}>
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="form-control" 
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={style.form_group}>
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="form-control" 
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={style.form_group}>
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="form-control" 
                  placeholder="Project Discussion"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={style.form_group}>
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  className="form-control" 
                  placeholder="Let's discuss about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
 export default ContactPage

import React from 'react'
import style from '@/styles/Skills.module.css'

export default function Skills() {
  const Skills = [
    {
      icon: 'fab fa-html5',
      name: 'HTML5',
      description: 'Semantic, accessible markup that forms the foundation of modern web applications.'
    },
    {
      icon: 'fab fa-css3-alt',
      name: 'CSS3',
      description: 'Responsive designs, animations, and modern layout techniques for beautiful interfaces.'
    },
    {
      icon: 'fab fa-js',
      name: 'JavaScript',
      description: 'Interactive, dynamic web applications with modern ES6+ features and best practices.'
    },
    {
      icon: 'fas fa-database',
      name: 'MongoDB',
      description: 'NoSQL database expertise for scalable, flexible data management in modern applications.'
    },
    {
      icon: 'fab fa-react',
      name: 'React',
      description: 'Modern frontend development with reusable components and efficient state management.'
    },
    {
      icon: 'fab fa-node-js',
      name: 'Node.js',
      description: 'Server-side JavaScript for building scalable backend services and APIs.'
    }
  ]
  return (
    <section className={style.skills} id="Skills">
      <div className={style.container}>
        <h2>My Technical Skills</h2>
        <div className={style.skills_container}>
          {Skills.map((Skills, index) => (
            <div key={index} className={style.skill_card}>
              <div className={style.skill_icon}>
                <i className={Skills.icon}></i>
              </div>
              <h3>{Skills.name}</h3>
              <p>{Skills.description}</p>
            </div>
          ))}
        </div>
      </div>
      </section>
  )
}



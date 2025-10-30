import style from '@/Components/Projects.module.css'

export default function Projects() {
  const projects = [
    {
      title: 'Modern E-Commerce Solution',
      description: 'A full-featured online store with product catalog, shopping cart, and secure payment processing.',
      imageStyle: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
      technologies: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'React', 'Node.js'],
      label: 'E-Commerce Platform'
    },
    {
      title: 'Productivity Application',
      description: 'An intuitive task manager with drag-and-drop functionality, team collaboration, and real-time updates.',
      imageStyle: { background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
      technologies: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'React'],
      label: 'Task Management App'
    },
    {
      title: 'Business Intelligence Tool',
      description: 'A comprehensive dashboard for data visualization, reporting, and business analytics.',
      imageStyle: { background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
      technologies: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'React', 'Node.js'],
      label: 'Analytics Dashboard'
    }
  ]

  return (
    <section className={style.projects} id="projects">
      <div className={style.container}>
        <h2>Featured Projects</h2>
        <div className={style.projects_grid}>
          {projects.map((project, index) => (
            <div key={index} className={style.project_card}>
              <div className={style.project_image} style={project.imageStyle}>
                {project.label}
              </div>
              <div className={style.project_content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={style.project_tech}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href="#" className="btn">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
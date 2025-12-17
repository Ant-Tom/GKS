import { Link } from 'react-router-dom'
import './AboutSection.css'

function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">О КОМПАНИИ</h2>
          <div className="section-arrow">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8L20 16L12 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="about-content">
          <div className="about-column">
            <p>
              НПП «ГКС» — один из лидеров отрасли в создании автоматизированных систем управления технологических процессов, блочного оборудования, систем учёта, аналитических систем, решений в области экологического мониторинга.
            </p>
          </div>
          <div className="about-column">
            <p>
              Компания реализует комплексные проекты «под ключ», ежегодно выводит на рынок новые решения, располагает собственной производственной базой с современным оборудованием.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection


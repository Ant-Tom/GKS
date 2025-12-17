import { Link } from 'react-router-dom'
import './Career.css'

function Career() {
  return (
    <div className="career-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">КАРЬЕРА</h1>
        </div>
      </section>
      <section className="page-content">
        <div className="container">
          <div className="career-content">
            <h2>Вакансии</h2>
            <p>Информация о вакансиях и возможностях карьерного роста в компании.</p>
            <Link to="/career/application" className="career-btn">
              Заполнить анкету
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Career


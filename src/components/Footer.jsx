import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h4 className="footer-title">Главная</h4>
            <ul className="footer-links">
              <li><Link to="/">Главная</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">О компании</h4>
            <ul className="footer-links">
              <li><Link to="/about">О компании</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Продукция</h4>
            <ul className="footer-links">
              <li><Link to="/products">Системы измерений количества и показателей качества</Link></li>
              <li><Link to="/products">Блочно-комплектное технологическое оборудование</Link></li>
              <li><Link to="/products">Системы автоматизации технологических процессов</Link></li>
              <li><Link to="/products">Метрологическое обеспечение</Link></li>
              <li><Link to="/products">Сервисное обслуживание</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Услуги</h4>
            <ul className="footer-links">
              <li><Link to="/services">Проектные работы по системам автоматизации и связи</Link></li>
              <li><Link to="/services">Пусконаладочные работы</Link></li>
              <li><Link to="/services">Разработка прикладного и системного ПО</Link></li>
              <li><Link to="/services">Сервисное и метрологическое обслуживание</Link></li>
              <li><Link to="/services">Технологическое консультирование</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Новости</h4>
            <ul className="footer-links">
              <li><Link to="/news">Новости</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <ul className="footer-links">
              <li><Link to="/career">Карьера</Link></li>
              <li><Link to="/contacts">Контакты</Link></li>
              <li><a href="#privacy">Политика конфиденциальности</a></li>
              <li><a href="#quality">Оценка качества</a></li>
              <li><a href="#summary">Сводные ведомости</a></li>
            </ul>
          </div>
          <div className="footer-column footer-social">
            <div className="social-icons">
              <a href="#" aria-label="Facebook" className="social-icon">f</a>
              <a href="#" aria-label="Instagram" className="social-icon">📷</a>
              <a href="#" aria-label="YouTube" className="social-icon">▶</a>
              <a href="#" aria-label="VK" className="social-icon">вк</a>
              <a href="#" aria-label="Odnoklassniki" className="social-icon">ok</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">© 2023 НПП «ГКС»</p>
          <div className="footer-bottom-links">
            <span>Дизайн сайта: Katerina Timofeeva</span>
            <span>•</span>
            <span>Разработано в АСПРО</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


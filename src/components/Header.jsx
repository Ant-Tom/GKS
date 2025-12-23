import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Определяем, мобильное ли устройство
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Закрываем меню при клике на ссылку на мобильных
  const handleLinkClick = () => {
    if (isMobile) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="header">
      <div className="header-main">
        <div className="header-container">
          <Link to="/" className="logo">
            НПП «ГКС»
          </Link>
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню"
          >
            <span className={mobileMenuOpen ? 'active' : ''}></span>
            <span className={mobileMenuOpen ? 'active' : ''}></span>
            <span className={mobileMenuOpen ? 'active' : ''}></span>
          </button>
          {mobileMenuOpen && (
            <div
              className="nav-overlay"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}
          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <div className="nav-dropdown">
              <Link to="/" className="nav-link" onClick={handleLinkClick}>
                Главная
                <svg className="dropdown-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="nav-dropdown">
              <Link to="/about" className="nav-link" onClick={handleLinkClick}>
                О компании
                <svg className="dropdown-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="nav-dropdown">
              <Link to="/products" className="nav-link" onClick={handleLinkClick}>
                Продукция
                <svg className="dropdown-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="nav-dropdown">
              <Link to="/services" className="nav-link" onClick={handleLinkClick}>
                Услуги
                <svg className="dropdown-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="nav-dropdown">
              <Link to="/news" className="nav-link" onClick={handleLinkClick}>
                Новости
                <svg className="dropdown-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="nav-dropdown">
              <Link to="/career" className="nav-link" onClick={handleLinkClick}>
                Карьера
                <svg className="dropdown-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="nav-dropdown">
              <Link to="/contacts" className="nav-link" onClick={handleLinkClick}>
                Контакты
                <svg className="dropdown-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </nav>
          <button className="callback-btn">Связаться с нами</button>
          <div className={`header-actions ${mobileMenuOpen ? 'header-actions-open' : ''}`}>
            <button className="search-btn" aria-label="Поиск">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 19L13.514 13.506L19 19ZM17 10.5C17 15.194 13.194 19 8.5 19C3.806 19 0 15.194 0 10.5C0 5.806 3.806 2 8.5 2C13.194 2 17 5.806 17 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="contact-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 13.92V16.92C18.0011 17.1985 17.9441 17.4742 17.8325 17.7292C17.7209 17.9842 17.5573 18.2126 17.3523 18.3992C17.1472 18.5857 16.9053 18.7261 16.6423 18.8112C16.3793 18.8962 16.1015 18.9242 15.8273 18.8932C12.7429 18.4986 9.787 17.4471 7.19 15.8122C4.77382 14.3307 2.72533 12.2822 1.24386 9.86617C0.608951 7.26917 0.557423 4.31329 0.162858 1.22892C0.131843 0.954678 0.159844 0.676933 0.24493 0.413911C0.330022 0.150889 0.47038 -0.0910285 0.65693 -0.296067C0.84348 -0.501105 1.07186 -0.664677 1.32686 -0.776272C1.58187 -0.887867 1.85759 -0.944859 2.13686 -0.943782H5.13686C5.59547 -0.947224 6.04467 -0.798637 6.41035 -0.520033C6.77603 -0.241429 7.03766 0.151982 7.15686 0.596217C7.34804 1.41165 7.63796 2.19783 8.01686 2.93622C8.1803 3.25492 8.2506 3.61794 8.21886 3.97822C8.18714 4.3385 8.05464 4.68049 7.83686 4.96622L6.09686 7.14622C7.51427 9.81322 9.51382 11.8127 12.1809 13.2302L14.3609 11.4902C14.6466 11.2724 14.9886 11.1399 15.3489 11.1081C15.7091 11.0764 16.0722 11.1467 16.3909 11.3102C17.1293 11.6891 17.9155 11.9791 18.7309 12.1702C19.1784 12.291 19.5738 12.5549 19.8533 12.9234C20.1328 13.2918 20.2803 13.7447 20.2739 14.2062L20.2709 13.9202L18 13.92Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Свяжитесь с нами</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header


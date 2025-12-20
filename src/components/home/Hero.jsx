import './Hero.css'
import proectsIcon from '../../assets/proects.svg'
import garantIcon from '../../assets/garant.png'
import proffesionalIcon from '../../assets/proffesional.svg'
import heroVideoImage from '../../assets/hero-video-355754.png'
import logoGKS from '../../assets/logoGKS.svg'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-brushstrokes"></div>
      </div>
      <div className="hero-content">
        <div className="hero-company-name">НПП «ГКС»</div>
        <div className="hero-title-wrapper">
          <h1 className="hero-title">
            <span className="hero-title-line">ИНЖИНИРИНГ</span>
            <span className="hero-title-line hero-title-line-offset">КАК ИСКУССТВО</span>
          </h1>
        </div>
        <img src={logoGKS} alt="НПП ГКС" className="hero-logo-under-title" />
        <div className="hero-stats">
          <div className="stat-item">
            <img src={proectsIcon} alt="Проекты" className="stat-icon-img" />
            <div className="stat-text">2000+ проектов</div>
          </div>
          <div className="stat-item">
            <img src={garantIcon} alt="Гарантия" className="stat-icon-img" />
            <div className="stat-text">100% гарантия качества</div>
          </div>
          <div className="stat-item">
            <img src={proffesionalIcon} alt="Кадры" className="stat-icon-img" />
            <div className="stat-text">Профессиональные кадры</div>
          </div>
        </div>
      </div>
      <div className="hero-video-container">
        <div className="hero-video-placeholder" style={{ backgroundImage: `url(${heroVideoImage})` }}>
          <div className="video-overlay"></div>
        </div>
        <div className="video-controls">
          <button className="play-pause">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="0" width="7" height="26" fill="white" />
              <rect x="15" y="0" width="7" height="26" fill="white" />
            </svg>
          </button>
          <div className="progress-bar">
            <div className="progress-line progress-line-bg"></div>
            <div className="progress-line progress-line-fill"></div>
            <div className="progress-dot"></div>
          </div>
          <span className="time">00:30</span>
          <button className="volume-btn">
            <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4L12 12H4V16H12L20 24V4Z" fill="white" />
              <path d="M24 8C26.2091 8 28 9.79086 28 12C28 14.2091 26.2091 16 24 16M24 4C28.4183 4 32 7.58172 32 12C32 16.4183 28.4183 20 24 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero


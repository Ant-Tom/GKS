import './About.css'

function About() {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">О КОМПАНИИ</h1>
        </div>
      </section>
      
      <section className="page-content">
        <div className="container">
          <div className="content-section about-intro">
            <div className="intro-grid">
              <div className="intro-text">
                <h2>Общая информация</h2>
                <p>
                  НПП «ГКС» — один из лидеров отрасли в создании автоматизированных систем управления технологических процессов, блочного оборудования, систем учёта, аналитических систем, решений в области экологического мониторинга.
                </p>
                <p>
                  Компания реализует комплексные проекты «под ключ», ежегодно выводит на рынок новые решения, располагает собственной производственной базой с современным оборудованием.
                </p>
                <p>
                  Мы специализируемся на разработке и внедрении инновационных решений в области промышленной автоматизации, обеспечивая нашим клиентам повышение эффективности производства и соответствие высоким стандартам качества.
                </p>
              </div>
              <div className="intro-stats">
                <div className="stat-box">
                  <div className="stat-number">2000+</div>
                  <div className="stat-label">успешных проектов</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">19+</div>
                  <div className="stat-label">лет на рынке</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">гарантия качества</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section about-mission">
            <h2>Наша миссия</h2>
            <div className="mission-content">
              <p>
                Наша миссия — создавать передовые технологические решения, которые помогают нашим клиентам достигать новых высот в своей деятельности. Мы стремимся к постоянному совершенствованию и инновациям, обеспечивая максимальную эффективность и надёжность наших систем.
              </p>
              <div className="mission-values">
                <div className="value-item">
                  <h3>Качество</h3>
                  <p>Высокие стандарты качества во всех аспектах нашей работы</p>
                </div>
                <div className="value-item">
                  <h3>Инновации</h3>
                  <p>Постоянное развитие и внедрение новых технологий</p>
                </div>
                <div className="value-item">
                  <h3>Надёжность</h3>
                  <p>Проверенные решения и долгосрочная поддержка</p>
                </div>
                <div className="value-item">
                  <h3>Партнёрство</h3>
                  <p>Доверительные отношения с клиентами и партнёрами</p>
                </div>
              </div>
            </div>
          </div>

          <div id="partners" className="content-section partners-section">
            <h2>Партнеры и заказчики</h2>
            <p className="section-description">
              Мы гордимся долгосрочными партнёрскими отношениями с ведущими компаниями различных отраслей промышленности.
            </p>
            <div className="partners-grid">
              <div className="partner-card">
                <div className="partner-placeholder">ПАРТНЕР 1</div>
              </div>
              <div className="partner-card">
                <div className="partner-placeholder">ПАРТНЕР 2</div>
              </div>
              <div className="partner-card">
                <div className="partner-placeholder">ПАРТНЕР 3</div>
              </div>
              <div className="partner-card">
                <div className="partner-placeholder">ПАРТНЕР 4</div>
              </div>
              <div className="partner-card">
                <div className="partner-placeholder">ПАРТНЕР 5</div>
              </div>
              <div className="partner-card">
                <div className="partner-placeholder">ПАРТНЕР 6</div>
              </div>
            </div>
          </div>

          <div id="reviews" className="content-section reviews-section">
            <h2>Отзывы</h2>
            <p className="section-description">
              Мы ценим обратную связь от наших клиентов и постоянно работаем над улучшением качества услуг.
            </p>
            <div className="reviews-grid">
              <div className="review-card">
                <div className="review-header">
                  <div className="review-author">
                    <div className="author-avatar">АБ</div>
                    <div className="author-info">
                      <div className="author-name">Александр Белов</div>
                      <div className="author-position">Директор по производству</div>
                    </div>
                  </div>
                </div>
                <div className="review-text">
                  <p>
                    "Работа с НПП «ГКС» — это всегда высокий профессионализм и внимательное отношение к деталям. Реализованные проекты показали отличные результаты."
                  </p>
                </div>
                <div className="review-rating">★★★★★</div>
              </div>
              <div className="review-card">
                <div className="review-header">
                  <div className="review-author">
                    <div className="author-avatar">МК</div>
                    <div className="author-info">
                      <div className="author-name">Мария Ковалёва</div>
                      <div className="author-position">Главный инженер</div>
                    </div>
                  </div>
                </div>
                <div className="review-text">
                  <p>
                    "Системы автоматизации, внедрённые компанией НПП «ГКС», значительно повысили эффективность наших производственных процессов."
                  </p>
                </div>
                <div className="review-rating">★★★★★</div>
              </div>
              <div className="review-card">
                <div className="review-header">
                  <div className="review-author">
                    <div className="author-avatar">ИП</div>
                    <div className="author-info">
                      <div className="author-name">Игорь Петров</div>
                      <div className="author-position">Технический директор</div>
                    </div>
                  </div>
                </div>
                <div className="review-text">
                  <p>
                    "Профессиональный подход, качественное оборудование и отличная техническая поддержка. Рекомендуем!"
                  </p>
                </div>
                <div className="review-rating">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About


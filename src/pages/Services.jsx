import './Services.css'

function Services() {
  const services = [
    'Проектные работы по системам автоматизации и связи',
    'Пусконаладочные работы',
    'Разработка прикладного и системного ПО',
    'Сервисное и метрологическое обслуживание',
    'Технологическое консультирование',
  ]

  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">УСЛУГИ</h1>
        </div>
      </section>
      <section className="page-content">
        <div className="container">
          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <h2>{service}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services


import { useState } from 'react'
import './MapSection.css'

function MapSection() {
  const [cardVisible, setCardVisible] = useState(true)

  return (
    <section className="map-section">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2291.234567890123!2d52.283456!3d54.536789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDMyJzEyLjQiTiA1MsKwMTcnMDAuNCJF!5e0!3m2!1sru!2sru!4v1234567890123!5m2!1sru!2sru"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Карта расположения"
        ></iframe>
        {cardVisible && (
          <div className="map-info-card">
            <button className="map-card-close" onClick={() => setCardVisible(false)} aria-label="Закрыть">×</button>
          <h3 className="map-card-title">Филиал в г. Бугульме</h3>
          <p className="map-card-address">ул. Нефтяников, д. №3А, 423231</p>
          <div className="map-card-contacts">
            <p className="map-card-label">Телефон:</p>
            <a href="tel:+78559474910">+7 (85594) 7 49 10</a>
            <a href="tel:+78559477774">+7 (85594) 7 77 74</a>
          </div>
          <button className="map-card-btn">НАПИСАТЬ СООБЩЕНИЕ</button>
          </div>
        )}
      </div>
    </section>
  )
}

export default MapSection


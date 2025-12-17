import MapSection from '../components/home/MapSection'
import './Contacts.css'

function Contacts() {
  return (
    <div className="contacts-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">КОНТАКТЫ</h1>
        </div>
      </section>
      <section className="page-content">
        <div className="container">
          <div className="contacts-grid">
            <div className="contact-info">
              <h2>Контакты</h2>
              <div className="contact-item">
                <strong>Адрес:</strong>
                <p>ул. Нефтяников, д. №3А, 423231, г. Бугульма</p>
              </div>
              <div className="contact-item">
                <strong>Телефоны:</strong>
                <p>
                  <a href="tel:+78559474910">+7 (85594) 7 49 10</a>
                  <br />
                  <a href="tel:+78559477774">+7 (85594) 7 77 74</a>
                </p>
              </div>
              <div className="contact-item">
                <strong>Email:</strong>
                <p><a href="mailto:info@gks.ru">info@gks.ru</a></p>
              </div>
            </div>
            <div className="contact-form-section">
              <h2>Связаться с нами</h2>
              <form className="contact-form">
                <input type="text" placeholder="Ваше имя" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Телефон" />
                <textarea placeholder="Сообщение" rows="5" required></textarea>
                <button type="submit" className="submit-btn">Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <MapSection />
    </div>
  )
}

export default Contacts


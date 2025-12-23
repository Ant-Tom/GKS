import './Feedback.css'
import Container from '../../assets/Container.svg'
import Container1 from '../../assets/Container-1.svg'
import Container2 from '../../assets/Container-2.svg'

function Feedback() {
  return (
    <section className="feedback-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">ОБРАТНАЯ СВЯЗЬ</h2>
          <div className="section-arrow">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8L20 16L12 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="feedback-content">
          <div className="feedback-column">
            <p>
              Мы специализируемся на услугах различных направлений — от проектирования инженерных систем и монтажа металлоконструкций до аренды спецтехники и поставок медицинского оборудования.
            </p>
          </div>
          <div className="feedback-column">
            <p>
              Хотите узнать подробнее об условиях сотрудничества? Свяжитесь с нами по почте или телефону. Проконсультируем, ответим на вопросы и подготовим индивидуальные условия сотрудничества.
            </p>
          </div>
        </div>
        <div className="feedback-buttons">
          <img src={Container} alt="ЗАКАЗАТЬ ЗВОНОК" className="feedback-btn-image" />
          <img src={Container1} alt="ЗАДАТЬ ВОПРОС" className="feedback-btn-image" />
          <img src={Container2} alt="ОСТАВИТЬ ОТЗЫВ" className="feedback-btn-image" />
        </div>
      </div>
    </section>
  )
}

export default Feedback


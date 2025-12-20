import './Feedback.css'

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
          <button className="feedback-btn">
            <div className="feedback-btn-content">
              <svg className="btn-icon" width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2126 21.3523 21.3992C21.1472 21.5857 20.9053 21.7261 20.6423 21.8112C20.3793 21.8962 20.1015 21.9242 19.8273 21.8932C16.7429 21.4986 13.787 20.4471 11.19 18.8122C8.77382 17.3307 6.72533 15.2822 5.24386 12.8662C3.60895 10.2692 2.55742 7.31329 2.16286 4.22892C2.13184 3.95468 2.15984 3.67693 2.24493 3.41391C2.33002 3.15089 2.47038 2.90897 2.65693 2.70393C2.84348 2.49889 3.07186 2.33532 3.32686 2.22373C3.58187 2.11213 3.85759 2.05514 4.13686 2.05622H7.13686C7.59547 2.05278 8.04467 2.20136 8.41035 2.47997C8.77603 2.75858 9.03766 3.15198 9.15686 3.59622C9.34804 4.41165 9.63796 5.19783 10.0169 5.93622C10.1803 6.25492 10.2506 6.61794 10.2189 6.97822C10.1871 7.3385 10.0546 7.68049 9.83686 7.96622L8.09686 10.1462C9.51427 12.8132 11.5138 14.8127 14.1809 16.2302L16.3609 14.4902C16.6466 14.2724 16.9886 14.1399 17.3489 14.1081C17.7091 14.0764 18.0722 14.1467 18.3909 14.3102C19.1293 14.6891 19.9155 14.9791 20.7309 15.1702C21.1784 15.291 21.5738 15.5549 21.8533 15.9234C22.1328 16.2918 22.2803 16.7447 22.2739 17.2062L22.2709 16.9202L22 16.92Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="feedback-btn-text">ЗАКАЗАТЬ ЗВОНОК</span>
            </div>
            <div className="feedback-btn-arrow">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8L20 16L12 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
          <button className="feedback-btn">
            <div className="feedback-btn-content">
              <svg className="btn-icon" width="56" height="60" viewBox="0 0 56 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49 20.1667C49.006 21.3667 48.7167 22.55 48.15 23.625C47.19 25.3333 45.542 26.5833 43.525 27.125C46.667 28.8333 48.8333 32.0833 48.8333 35.8333C48.8333 36.6333 48.7167 37.4167 48.5 38.1667L56 42.5L47.5 38.1667C45.3333 39.5 42.75 40.1667 40 40.1667H20C17.25 40.1667 14.6667 39.5 12.5 38.1667L4 42.5L12.5 38.1667C12.2833 37.4167 12.1667 36.6333 12.1667 35.8333C12.1667 32.0833 14.333 28.8333 17.475 27.125C15.458 26.5833 13.81 25.3333 12.85 23.625C12.2833 22.55 11.994 21.3667 12 20.1667V20.1667C12.0012 18.9667 12.2917 17.7833 12.85 16.7083C13.81 15 15.458 13.75 17.475 13.2083C14.333 11.5 12.1667 8.25 12.1667 4.5C12.1667 3.7 12.2833 2.91667 12.5 2.16667L4 -2.16667L12.5 2.16667C14.6667 0.833333 17.25 0.166667 20 0.166667H40C42.75 0.166667 45.3333 0.833333 47.5 2.16667L56 -2.16667L47.5 2.16667C47.2833 2.91667 47.1667 3.7 47.1667 4.5C47.1667 8.25 45 11.5 41.8583 13.2083C43.875 13.75 45.523 15 46.4833 16.7083C47.0417 17.7833 47.331 18.9667 47.33 20.1667H49V20.1667Z" fill="white" />
              </svg>
              <span className="feedback-btn-text">ЗАДАТЬ ВОПРОС</span>
            </div>
            <div className="feedback-btn-arrow">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8L20 16L12 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
          <button className="feedback-btn feedback-btn-purple">
            <div className="feedback-btn-content">
              <svg className="btn-icon" width="66" height="61" viewBox="0 0 66 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 25H44M22 33H44M33 49C41.2843 49 48 42.2843 48 34C48 25.7157 41.2843 19 33 19C24.7157 19 18 25.7157 18 34C18 35.2843 18.4183 36.4833 19.15 37.5L16.5 48.5L27.5 45.85C28.5167 46.5817 29.7157 47 31 47H33C41.2843 47 48 40.2843 48 32C48 23.7157 41.2843 17 33 17C24.7157 17 18 23.7157 18 32C18 33.2843 18.4183 34.4833 19.15 35.5L16.5 46.5L27.5 43.85C28.5167 44.5817 29.7157 45 31 45H33Z" fill="white" />
              </svg>
              <span className="feedback-btn-text">ОСТАВИТЬ ОТЗЫВ</span>
            </div>
            <div className="feedback-btn-arrow">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8L20 16L12 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Feedback


import './Advantages.css'
import advantage1Image from '../../assets/advantage-1-projects-3e4879.png'
import advantage2Image from '../../assets/advantage-2-experience.png'
import advantage3Image from '../../assets/advantage-3-professional-578ae0.png'

function Advantages() {
  const advantages = [
    {
      title: 'БОЛЕЕ 2000 УСПЕШНЫХ ПРОЕКТОВ',
      image: advantage1Image
    },
    {
      title: 'БОЛЕЕ 19 ЛЕТ ОПЫТА',
      image: advantage2Image
    },
    {
      title: 'ПРОФЕССИОНАЛИЗМ СОТРУДНИКОВ',
      image: advantage3Image
    }
  ]

  return (
    <section className="advantages-section">
      <div className="container">
        <h2 className="advantages-title">ПРЕИМУЩЕСТВА</h2>
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-card">
              <div className="advantage-image">
                <div 
                  className="advantage-image-overlay"
                  style={{ backgroundImage: `url(${advantage.image})` }}
                ></div>
                <div className="advantage-overlay"></div>
              </div>
              <h3 className="advantage-title">{advantage.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages


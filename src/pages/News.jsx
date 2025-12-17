import './News.css'

function News() {
  return (
    <div className="news-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">НОВОСТИ</h1>
        </div>
      </section>
      <section className="page-content">
        <div className="container">
          <div className="news-list">
            <p>Новости компании будут размещаться здесь.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News


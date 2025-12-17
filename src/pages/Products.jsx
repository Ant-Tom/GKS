import './Products.css'

function Products() {
  const products = [
    {
      title: 'СИСТЕМЫ ИЗМЕРЕНИЙ КОЛИЧЕСТВА И ПОКАЗАТЕЛЕЙ КАЧЕСТВА',
      description: 'Проектирование, производство, монтаж, метрологическое обеспечение и пусконаладка систем измерения количества и показателей качества.',
    },
    {
      title: 'БЛОЧНО-КОМПЛЕКТНОЕ ТЕХНОЛОГИЧЕСКОЕ ОБОРУДОВАНИЕ',
      description: 'Блочно-модульные установки решают задачи по подготовке объектов к вводу в эксплуатацию, сокращая сроки строительства.',
    },
    {
      title: 'СИСТЕМЫ АВТОМАТИЗАЦИИ ТЕХНОЛОГИЧЕСКИХ ПРОЦЕССОВ',
      description: 'Проекты комплексной автоматизации, противоаварийной защиты и пожарной безопасности.',
    },
  ]

  return (
    <div className="products-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">ПРОДУКЦИЯ</h1>
        </div>
      </section>
      <section className="page-content">
        <div className="container">
          <div className="products-list">
            {products.map((product, index) => (
              <div key={index} className="product-item">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products


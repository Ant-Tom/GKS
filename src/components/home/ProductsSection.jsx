import { Link } from 'react-router-dom'
import './ProductsSection.css'
import product1Img1 from '../../assets/product-1-image-1.png'
import product1Img2 from '../../assets/product-1-image-2.png'
import product1Img3 from '../../assets/product-1-image-3.png'
import product2Img1 from '../../assets/product-2-image-1.png'
import product2Img2 from '../../assets/product-2-image-2.png'
import product2Img3 from '../../assets/product-2-image-3.png'
import product3Img1 from '../../assets/product-3-image-1.png'
import product3Img2 from '../../assets/product-3-image-2.png'
import product3Img3 from '../../assets/product-3-image-3-536c08.png'

function ProductsSection() {
  const products = [
    {
      title: 'СИСТЕМЫ ИЗМЕРЕНИЙ КОЛИЧЕСТВА И ПОКАЗАТЕЛЕЙ КАЧЕСТВА',
      description: 'НПП «ГКС» осуществляет проектирование, производство, шеф-монтаж, пусконаладочные работы, метрологическое обеспечение и ввод в действие систем измерений количества и показателей качества (узлов учёта)',
      images: [product1Img1, product1Img2, product1Img3]
    },
    {
      title: 'БЛОЧНО-КОМПЛЕКТНОЕ ТЕХНОЛОГИЧЕСКОЕ ОБОРУДОВАНИЕ',
      description: 'Блочные установки и технологическое оборудование позволяют комплексно решить задачи, связанные с подготовкой и вводом объекта в эксплуатацию, значительно сокращая срок строительно-монтажных работ',
      images: [product2Img1, product2Img2, product2Img3]
    },
    {
      title: 'СИСТЕМЫ АВТОМАТИЗАЦИИ ТЕХНОЛОГИЧЕСКИХ ПРОЦЕССОВ',
      description: 'Наше предприятие выполняет проекты комплексной автоматизации технологических процессов и производств, а также обеспечение их противоаварийной защиты и противопожарной безопасности',
      images: [product3Img1, product3Img2, product3Img3]
    }
  ]

  return (
    <section className="products-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">ПРОДУКЦИЯ</h2>
          <div className="section-arrow">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8L20 16L12 24" stroke="#808285" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-images">
                {product.images.map((img, imgIndex) => (
                  <div key={imgIndex} className="product-image">
                    <div className="product-image-placeholder" style={{ backgroundImage: `url(${img})` }}>
                    </div>
                  </div>
                ))}
              </div>
              <div className="product-content">
                <div className="product-text-container">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <Link to="/products" className="view-all-btn">
            <span>Посмотреть все &gt;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection


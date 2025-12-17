import Hero from '../components/home/Hero'
import AboutSection from '../components/home/AboutSection'
import ProductsSection from '../components/home/ProductsSection'
import Advantages from '../components/home/Advantages'
import Feedback from '../components/home/Feedback'
import MapSection from '../components/home/MapSection'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Hero />
      <AboutSection />
      <ProductsSection />
      <Advantages />
      <Feedback />
      <MapSection />
    </div>
  )
}

export default Home


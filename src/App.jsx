import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import BrandHero from './components/BrandHero'
import Hero from './components/Hero'
import CategoryGrid from './components/CategoryGrid'
import ProductGrid from './components/ProductGrid'
import OffersBanner from './components/OffersBanner'
import Collections from './components/Collections'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-light-bg">
      <AnnouncementBar />
      <Navbar />
      <BrandHero />
      <main>
        <Hero />
        <CategoryGrid />
        <ProductGrid />
        <OffersBanner />
        <Collections />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App

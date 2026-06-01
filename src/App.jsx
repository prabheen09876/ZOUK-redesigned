import { useState, useCallback, useRef } from 'react'
import LoadingScreen from './components/LoadingScreen'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import BrandHero from './components/BrandHero'
import Hero from './components/Hero'
import CategoryGrid from './components/CategoryGrid'
import CuratedBanner from './components/CuratedBanner'
import ProductGrid from './components/ProductGrid'
import OffersBanner from './components/OffersBanner'
import Collections from './components/Collections'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  const [pageReady, setPageReady] = useState(false)
  const brandHeroRef = useRef(null)

  const handleMorphStart = useCallback(() => {
    setPageReady(true)
  }, [])

  const handleLoadingFinish = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <>
      {loading && (
        <LoadingScreen
          onMorphStart={handleMorphStart}
          onFinish={handleLoadingFinish}
          brandHeroRef={brandHeroRef}
        />
      )}
      <div className={`min-h-screen bg-light-bg ${pageReady ? 'page--ready' : 'page--hidden'}`}>
        <div className="page-entrance page-entrance--nav">
          <AnnouncementBar />
          <Navbar />
        </div>
        <BrandHero ref={brandHeroRef} />
        <main className="page-entrance page-entrance--content">
          <Hero />
          <CategoryGrid />
          <CuratedBanner />
          <ProductGrid />
          <OffersBanner />
          <Collections />
          <Testimonials />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProdukUnggulan from '@/components/ProdukUnggulan'
import WhyChooseUs from '@/components/WhyChooseUs'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProdukUnggulan />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

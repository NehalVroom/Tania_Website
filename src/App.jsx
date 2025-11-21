import { useState } from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import AIApproach from './sections/AIApproach'
import Services from './sections/Services'
import Work from './sections/Work'
import ProofPoints from './sections/ProofPoints'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import CursorFollower from './components/CursorFollower'

function App() {
  return (
    <div className="relative">
      <CursorFollower />
      <Hero />
      <About />
      <AIApproach />
      <Services />
      <Work />
      <ProofPoints />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

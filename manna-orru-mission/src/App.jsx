import React, { Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
const CarouselProjects = React.lazy(() => import('./components/CarouselProjects'))
import Services from './components/Services'
import Partners from './components/Partners'
import Mission from './components/Mission'
import Footer from './components/Footer'
import LeavesFalling from './components/LeavesFalling'

export default function App(){
  return (
    <div className="min-h-screen text-gray-800 relative">
      <LeavesFalling count={30} opacity={0.65} />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Suspense fallback={<div className="py-12 text-center">Loading carousel...</div>}>
            <CarouselProjects />
          </Suspense>
          <Services />
          <Partners />
          <Mission />
        </main>
        <Footer />
      </div>
    </div>
  )
}

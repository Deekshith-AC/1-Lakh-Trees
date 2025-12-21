import React, {useEffect, useRef} from 'react'
import IMAGES from '../assets/images'
import { motion } from 'framer-motion'
import SmartImage from './SmartImage'
import LeavesFalling from './LeavesFalling'

export default function Hero(){
  const ref = useRef(null)
  useEffect(()=>{
    // lightweight parallax (no ScrollMagic) — scales hero background slightly on scroll
    const el = ref.current
    if(!el) return

    function onScroll(){
      const rect = el.getBoundingClientRect()
      // compute progress where 0 = center aligned, -1..1 range
      const centerOffset = (rect.top + rect.height/2) - (window.innerHeight/2)
      const progress = Math.max(-1, Math.min(1, -centerOffset / window.innerHeight))
      const scale = 1 + 0.12 * progress
      el.style.transform = `scale(${scale})`
      el.style.transformOrigin = 'center top'
    }

    onScroll()
    window.addEventListener('scroll', onScroll, {passive:true})
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div ref={ref} className="absolute inset-0">
        <SmartImage src={IMAGES.hero} alt="hero" className="w-full h-full object-cover" style={{display:'block'}} />
      </div>
      <div className="absolute inset-0 bg-black/24"/>
      <LeavesFalling count={36} />

      <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6">
        <div className="hidden md:flex items-center gap-8 w-full">
          <div className="text-white max-w-2xl flex-1">
            Mana Orru Mana Bhadhyatha
          </motion.h1>
          <motion.p className="mt-4 text-lg" initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.6}}>
            Mana Orru Mana Bhadhyatha
          </motion.p>
          <div className="mt-6 flex gap-4">
            <a className="btn-primary px-6 py-3 rounded-md" href="#about">Become a Volunteer</a>
            <a className="border border-white px-6 py-3 rounded-md hover:bg-white/10" href="#mission">Plant a Sapling</a>
          </div>
        </div>
        <div className="md:hidden text-white max-w-2xl">
          <motion.h1 className="text-4xl font-bold text-shadow-green" initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.2}}>
            Mana Orru Mana Bhadhyatha
          </motion.h1>
          <motion.h2 className="mt-4 text-2xl" initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.4}}>
            100,000 Saplings in 12 Months
          </motion.h2>
          <motion.p className="mt-4 text-lg" initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.6}}>
            Mana Orru Mana Bhadhyatha
          </motion.p>
          <div className="mt-6 flex gap-4">
            <a className="btn-primary px-6 py-3 rounded-md" href="#about">Become a Volunteer</a>
            <a className="border border-white px-6 py-3 rounded-md hover:bg-white/10" href="#mission">Plant a Sapling</a>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

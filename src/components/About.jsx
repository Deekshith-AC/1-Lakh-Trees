import React from 'react'
import IMAGES from '../assets/images'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
        <motion.div className="rounded-xl overflow-hidden shadow-lg" initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}}>
          <img src={IMAGES.homeExtra || IMAGES.about} alt="community planting" className="w-full h-96 object-cover" onError={(e)=>{e.currentTarget.src=IMAGES.about || 'data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'600\'><rect width=\'100%\' height=\'100%\' fill=\'%2394c942\'/><text x=\'50%\' y=\'50%\' font-size=\'28\' fill=\'white\' font-family=\'Arial\' text-anchor=\'middle\'>Image Unavailable</text></svg>'}}/>
        </motion.div>
        <div>
          <div className="text-primary font-semibold">About Our Mission</div>
          <h2 className="text-3xl font-bold mt-4">Mana Orru Mana Bhadhyatha</h2>
          <p className="mt-4 text-lg leading-relaxed">Community mission planting 1,00,000 trees across 26 Andhra districts in 12 months. Schools, colleges, CSR, Govt, NGOs. Native species for parks, schools, farms.</p>
          <a href="#" className="inline-block mt-6 text-primary font-medium">Learn More →</a>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import IMAGES from '../assets/images'

const cards = [
  {title:'Our Vision', letter:'V', img:IMAGES.services[0]},
  {title:'Our Mission', letter:'M', img:IMAGES.services[1]},
  {title:'Our Impact', letter:'I', img:IMAGES.services[2]},
]

export default function Services(){
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-6">What We Do</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c,i)=>(
            <motion.div key={i} className="rounded-lg overflow-hidden shadow-lg bg-white" initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.2*(i+1)}} viewport={{once:true}}>
              <div className="h-48 bg-cover bg-center" style={{backgroundImage:`url(${c.img})`}}></div>
              <div className="p-6">
                <div className="text-primary font-bold text-lg">{c.letter}</div>
                <h4 className="text-xl font-semibold mt-2">{c.title}</h4>
                <p className="mt-3 text-gray-600">Native species planting, community participation, school programs and CSR partnerships.</p>
                <a className="inline-block mt-4 text-primary" href="#">Learn more →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

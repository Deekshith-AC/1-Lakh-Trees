import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import IMAGES from '../assets/images'

export default function CarouselProjects(){
  const baseTitles = ['Vision','Mission','Andhra Map','Partners','Impact','Challenges','Success','Join']
  const slides = IMAGES.carousel.map((img, i) => ({ title: baseTitles[i] || `Slide ${i+1}`, img }))

  const [index, setIndex] = useState(0)
  const seen = useRef(new Set())

  useEffect(()=>{
    const id = setInterval(()=>{
      setIndex(i=> (i+1) % slides.length)
    }, 4500)
    return ()=>clearInterval(id)
  },[])

  const prev = ()=> setIndex(i=> (i-1 + slides.length) % slides.length)
  const next = ()=> setIndex(i=> (i+1) % slides.length)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Solutions</h3>
          <div className="flex gap-2">
            <button onClick={prev} className="px-3 py-1 bg-white border rounded shadow">◀</button>
            <button onClick={next} className="px-3 py-1 bg-white border rounded shadow">▶</button>
          </div>
        </div>

        <div className="relative h-80 rounded-lg overflow-hidden shadow">
          <AnimatePresence initial={false} mode="wait">
            <motion.div key={index} className="absolute inset-0"
              initial={{opacity:0, x:50}}
              animate={{opacity:1, x:0}}
              exit={{opacity:0, x:-50}}
              transition={{duration:0.6}}>
              <img
                src={slides[index].img}
                alt={slides[index].title}
                className="w-full h-full object-cover"
                onError={(e)=>{
                  const fallbacks = IMAGES.carouselFallbacks || []
                  const el = e.currentTarget
                  el._tryCount = el._tryCount || 0
                  if (el._tryCount < fallbacks.length) {
                    el._tryCount += 1
                    el.src = fallbacks[el._tryCount - 1]
                  } else {
                    el.src = 'data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'450\'><rect width=\'100%\' height=\'100%\' fill=\'%2394c942\'/><text x=\'50%\' y=\'50%\' font-size=\'28\' fill=\'white\' font-family=\'Arial\' text-anchor=\'middle\'>Image Unavailable</text></svg>'
                  }
                }}
              />
              <div className="absolute left-4 bottom-4 bg-white/80 text-gray-900 px-4 py-2 rounded">{slides[index].title}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

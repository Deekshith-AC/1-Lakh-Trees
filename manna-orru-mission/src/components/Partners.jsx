import React from 'react'
import IMAGES from '../assets/images'

export default function Partners(){
  return (
    <section className="py-16" style={{backgroundImage:`url(${IMAGES.partnersBg})`, backgroundSize:'cover'}}>
      <div className="max-w-6xl mx-auto px-6 bg-white/70 backdrop-blur rounded-lg py-8">
        <h3 className="text-2xl font-bold mb-6">Our Partners</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-start">
          {IMAGES.partnersLogos.map((l,i)=>(
            <div key={l} className="p-4 flex flex-col items-center text-center filter grayscale hover:grayscale-0 transition">
              <img src={l} alt={`partner-${i+1}`} className="w-28 h-28 object-contain" onError={(e)=>{e.currentTarget.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'><rect width=\'100%\' height=\'100%\' fill=\'%2394c942\'/><text x=\'50%\' y=\'50%\' font-size=\'20\' fill=\'white\' font-family=\'Arial\' text-anchor=\'middle\'>Logo</text></svg>'}}/>
              <div className="mt-3 text-sm md:text-base lg:text-lg font-semibold text-gray-800">Partner {i+1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

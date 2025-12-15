import React from 'react'
import IMAGES from '../assets/images'

export default function Mission(){
  return (
    <section id="mission" className="py-20" style={{backgroundImage:`url(${IMAGES.homeExtra})`, backgroundSize:'cover'}}>
      <div className="max-w-6xl mx-auto px-6 bg-white/80 rounded-lg py-8">
        <h2 className="text-3xl font-bold">Manna Orru Manna Bhadhyatha: 1 Lakh Trees</h2>
        <p className="mt-4">Objectives: Plant native species across villages, engage schools, CSR and Govt partners, monitor survival and impact. Execution: community nurseries, sapling distribution, drip irrigation support.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 bg-green-50 rounded">
            <h4 className="font-semibold">Objective</h4>
            <ul className="mt-2">
              <li>Plant 1,00,000 saplings</li>
              <li>Cover 26 districts in Andhra</li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 rounded">
            <h4 className="font-semibold">Execution</h4>
            <ul className="mt-2">
              <li>Schools & community drives</li>
              <li>CSR & Govt collaboration</li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 rounded">
            <h4 className="font-semibold">Impact</h4>
            <ul className="mt-2">
              <li>CO₂ absorption, shade, soil protection</li>
              <li>Local livelihoods & biodiversity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

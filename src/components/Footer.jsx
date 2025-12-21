import React from 'react'

export default function Footer(){
  return (
    <footer id="footer" className="py-12 bg-black text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-xl">Mana Orru Mana Bhadhyatha</h4>
            <p className="mt-2">vasudhaikavision@gmail.com | +91-9010254123</p>
          </div>
          <div>
            <h5 className="font-semibold">Quick Links</h5>
            <ul className="mt-2">
              <li><a href="#about">About</a></li>
              <li><a href="#mission">Mission</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Join Us</h5>
            <p className="mt-2">CTA: Join Now!</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">© {new Date().getFullYear()} Mana Orru Mana Bhadhyatha</div>
      </div>
      <a href="https://wa.me/919010254123" className="absolute right-6 bottom-6 bg-green-600 p-4 rounded-full shadow-lg">WhatsApp</a>
    </footer>
  )
}

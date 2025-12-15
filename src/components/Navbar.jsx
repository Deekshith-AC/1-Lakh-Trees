import React, {useState, useRef, useEffect} from 'react'
import IMAGES from '../assets/images'

export default function Navbar(){
  const [open,setOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const solRef = useRef(null)
  const links = [
    {label:'Home',href:'#home'},
    {label:'About',href:'#about'},
    {label:'Solutions',items:['Vision','Mission','Objectives','Partners','Impact','Map','Challenges']},
    {label:'Contact',href:'#footer'}
  ]

  useEffect(()=>{
    function onDocClick(e){
      if (solRef.current && !solRef.current.contains(e.target)){
        setSolutionsOpen(false)
      }
    }
    function onKey(e){
      if (e.key === 'Escape') setSolutionsOpen(false)
    }
    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onKey)
    return ()=>{
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  },[])

  return (
    <header className="fixed w-full z-50 backdrop-blur bg-black/30 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <div className="font-bold text-lg">Manna Orru Manna Bhadhyatha</div>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <a className="hover:text-primary" href="#home">Home</a>
          <a className="hover:text-primary" href="#about">About</a>
          <div className="relative" ref={solRef}>
            <button
              aria-expanded={solutionsOpen}
              onClick={()=>setSolutionsOpen(v=>!v)}
              className="hover:text-primary"
            >
              Solutions ▾
            </button>
            <div className={`absolute right-0 mt-2 bg-white text-gray-800 rounded shadow-md transition-all transform origin-top ${solutionsOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
              {['Vision','Mission','Objectives','Partners','Impact','Map','Challenges'].map((s,i)=>(
                <a key={s.toLowerCase()} className="block px-4 py-2 hover:bg-gray-100" href={`#${s.toLowerCase()}`}>{s}</a>
              ))}
            </div>
          </div>
          <a className="hover:text-primary" href="#footer">Contact</a>
        </nav>

        <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white"><path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/90 text-white p-6">
          <a className="block py-2" href="#home">Home</a>
          <a className="block py-2" href="#about">About</a>
          {['Vision','Mission','Objectives','Partners','Impact','Map','Challenges'].map((s,i)=>(
            <a key={s.toLowerCase()} className="block py-2" href={`#${s.toLowerCase()}`}>{s}</a>
          ))}
          <a className="block py-2" href="#footer">Contact</a>
        </div>
      )}
    </header>
  )
}


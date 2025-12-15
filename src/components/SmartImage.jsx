import React, {useState} from 'react'

const FALLBACK_SVG = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'><defs><linearGradient id='g' x1='0' x2='1'><stop offset='0' stop-color='%2394c942'/><stop offset='1' stop-color='%236fb126'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23g)'/><text x='50%' y='50%' font-size='36' fill='white' font-family='Arial,sans-serif' text-anchor='middle'>Tree Image</text></svg>`

export default function SmartImage({src, alt='', className='', style={}, ...rest}){
  const [failed, setFailed] = useState(false)
  const handleError = (e)=>{
    console.warn('Image failed to load', src, e)
    setFailed(true)
  }

  return (
    <img
      src={failed ? FALLBACK_SVG : src}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      onError={handleError}
      {...rest}
    />
  )
}

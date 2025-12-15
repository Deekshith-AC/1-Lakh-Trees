import React from 'react'

// Multiple leaf path variations for visual richness
const LEAF_PATHS = [
  // classic teardrop leaf
  'M12 2C8 8 2 10 2 10s2 6 8 10c6-4 10-8 10-8s-2-6-8-10z',
  // long slender leaf
  'M2 12c6-8 12-8 18 0-6 6-12 8-18 0z',
  // split vein leaf
  'M12 2c4 4 8 8 8 12s-4 6-8 6S4 20 4 14 8 6 12 2z',
  // rounded cluster leaf
  'M6 6c4-4 10-4 14 0 0 6-6 10-10 14C8 16 6 10 6 6z'
]

function LeafSVG({size=40, id, stops=[['0%','#9bdc6a'],['100%','#3a8f1c']], pathIndex=0}){
  const gradId = `leafGrad-${id}`
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden focusable="false">
      <defs>
        <linearGradient id={gradId} x1="0" x2="1">
          {stops.map(([off,color],i)=>(<stop key={i} offset={off} stopColor={color}/>))}
        </linearGradient>
        <filter id={`ds-${id}`} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0b3d0a" floodOpacity="0.12" />
        </filter>
      </defs>
      <path d={LEAF_PATHS[pathIndex % LEAF_PATHS.length]} fill={`url(#${gradId})`} filter={`url(#ds-${id})`} />
    </svg>
  )
}

export default function LeavesFalling({count=30, opacity=0.65}){
  const leaves = Array.from({length:count}).map((_,i)=>{
    const left = Math.random()*100
    const duration = (7 + Math.random()*14).toFixed(2)
    const delay = (Math.random()*6).toFixed(2)
    const size = Math.floor(18 + Math.random()*56)
    const sway = (3 + Math.random()*5).toFixed(2)
    const x = (Math.random()-0.5)*60
    const rotate = Math.floor(Math.random()*360)
    const alpha = (0.45 + Math.random()*0.45).toFixed(2)
    const pathIndex = Math.floor(Math.random()*LEAF_PATHS.length)
    const colorShift = Math.random()
    const stops = colorShift > 0.6 ? [['0%','#b9e88a'],['100%','#2f9b1f']] : [['0%','#f2d78a'],['100%','#6fb237']]
    return {left, duration, delay, size, sway, x, rotate, alpha, pathIndex, stops}
  })

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden" style={{zIndex:0, opacity}}>
      {leaves.map((l,i)=> (
        <div key={i}
          style={{
            position:'absolute',
            left:`${l.left}%`,
            top:'-12vh',
            width: l.size + 'px',
            height: l.size + 'px',
            opacity: l.alpha,
            transform: `translate3d(0,0,0)`,
            willChange: 'transform, opacity'
          }}
        >
          <div style={{
            animation: `fall ${l.duration}s linear ${l.delay}s infinite`,
            transformOrigin: 'center top'
          }}>
            <div style={{
              display:'inline-block',
              animation: `sway ${l.sway}s ease-in-out ${l.delay}s infinite alternate, spin ${6 + (l.duration%6)}s linear ${l.delay}s infinite`,
              transform: `translateX(${l.x}px) rotate(${l.rotate}deg)`
            }}>
              <LeafSVG id={`${i}`} size={l.size} pathIndex={l.pathIndex} stops={l.stops} />
            </div>
          </div>
        </div>
      ))}

      <style>{`
        @keyframes fall{
          0%{transform: translate3d(0,-12vh,0) rotate(0deg); opacity: 0}
          10%{opacity: 1}
          100%{transform: translate3d(0,120vh,0) rotate(360deg); opacity: 0.9}
        }
        @keyframes sway{
          0%{transform: translateX(-12px) rotate(0deg)}
          100%{transform: translateX(12px) rotate(8deg)}
        }
        @keyframes spin{
          0%{transform: rotate(0deg)}
          100%{transform: rotate(360deg)}
        }
        @media (prefers-reduced-motion: reduce) {
          .pointer-events-none * { animation: none !important; }
        }
      `}</style>
    </div>
  )
}

import React from 'react'

const LEAF_PATHS = [
  'M12 0c-4.418 0-8 4.03-8 9s8 15 8 15 8-9.97 8-15-3.582-9-8-9zm0 13.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z'
]

function LeafSVG({size=40, id, stops=[['0%','#4CAF50'],['100%','#8BC34A']], pathIndex=0}){
  const gradId = `leafGrad-${id}`
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden focusable="false">
      <defs>
        <linearGradient id={gradId} x1="0" x2="1">
          {stops.map(([off,color],i)=>(<stop key={i} offset={off} stopColor={color}/>))}
        </linearGradient>
      </defs>
      <path d={LEAF_PATHS[pathIndex % LEAF_PATHS.length]} fill={`url(#${gradId})`} />
      <path d="M12 2v11" stroke="#388E3C" strokeWidth="0.5" />
    </svg>
  )
}

export default function LeavesFalling({count=30, opacity=0.65}){
  const leaves = Array.from({length:count}).map((_,i)=>{
    const left = Math.random()*100
    const duration = (15 + Math.random()*20).toFixed(2) // Slower fall
    const delay = (Math.random()*15).toFixed(2)
    const size = Math.floor(30 + Math.random()*45)
    const sway = (5 + Math.random()*5).toFixed(2) // Gentle sway
    const x = (Math.random()-0.5)*130
    const rotate = Math.floor(Math.random()*360)
    const alpha = (0.75 + Math.random()*0.25).toFixed(2)
    const pathIndex = 0
    const colorShift = Math.random()
    const stops = colorShift > 0.5 
      ? [['0%','#66BB6A'], ['50%', '#4CAF50'], ['100%','#388E3C']]
      : [['0%','#8BC34A'], ['50%', '#689F38'], ['100%','#558B2F']]
    return {left, duration, delay, size, sway, x, rotate, alpha, pathIndex, stops}
  })

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden" style={{zIndex:0, opacity}}>
      {leaves.map((l,i)=> (
        <div key={i}
          style={{
            position:'absolute',
            left:`${l.left}%`,
            top:'-25vh',
            width: l.size + 'px',
            height: l.size + 'px',
            opacity: l.alpha,
            transform: `translate3d(0,0,0) rotate(${l.rotate}deg)`,
            willChange: 'transform, opacity'
          }}
        >
          <div style={{
            animation: `fall ${l.duration}s linear ${l.delay}s infinite`,
            transformOrigin: 'center center'
          }}>
            <div style={{
              display:'inline-block',
              animation: `sway ${l.sway}s ease-in-out ${l.delay}s infinite alternate`,
              transform: `translateX(${l.x}px)`
            }}>
              <LeafSVG id={`${i}`} size={l.size} pathIndex={l.pathIndex} stops={l.stops} />
            </div>
          </div>
        </div>
      ))}

      <style>{`
        @keyframes fall{
          0%{transform: translateY(-25vh) rotateZ(0deg);}
          100%{transform: translateY(125vh) rotateZ(360deg);}
        }
        @keyframes sway{
          0%{transform: translateX(-40px) rotateY(0deg) rotateZ(0deg);}
          100%{transform: translateX(40px) rotateY(60deg) rotateZ(10deg);}
        }
        @media (prefers-reduced-motion: reduce) {
          .pointer-events-none * { animation: none !important; }
        }
      `}</style>
    </div>
  )
}

"use client"
//https://github.com/darkroomengineering/lenis/blob/main/packages/react/README.md

import { ReactLenis,LenisRef } from 'lenis/react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { easingScrolling } from '@Utils/uiHelper';
export default function LenisScroller({children}:{children:React.ReactNode}) {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
   
    function update(time:number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
    window.lenis = lenisRef.current?.lenis
   
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  }, [])
 
  const options = {
    duration: 1,
    lerp: 0.01,
    easing: easingScrolling,
    smoothTouch: true,
  };
  
  return (
    <ReactLenis root autoRaf={false} options={options} ref={lenisRef}>
      {children}
    </ReactLenis>
  )
}

import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import useStoreTimeline from '@/store/useStoreTimeline';
export default function useTransitionPage({refContent}:{refContent:any}) {
    const setTimeline = useStoreTimeline((state) => state.setTimeline);
    const tlEnterRef = useRef<gsap.core.Timeline>()
    const tlExitRef = useRef<gsap.core.Timeline>()
    useEffect(() => {
        if (refContent) {
            tlEnterRef.current = gsap.timeline({ onComplete:() => {
                gsap.set(refContent,{
                    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
               })
            },paused: true });
            tlEnterRef.current.to(refContent, { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", duration: 1 });
            tlExitRef.current = gsap.timeline({ paused: true });
            tlExitRef.current.to(refContent,{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", duration: 1 });
           
            
            //play
            tlEnterRef.current?.play()
            setTimeline('pageLoaderExit', tlExitRef.current);
          
        }
        return () => {
            if(tlEnterRef.current) tlEnterRef.current.kill()
            if(tlExitRef.current) tlExitRef.current.kill()
        }
    }, []);
  return null
}

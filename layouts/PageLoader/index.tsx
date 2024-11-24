import React, { useEffect, useRef } from 'react'
import s from './style.module.css'
import useStoreTimeline from '@/store/useStoreTimeline';
import gsap from 'gsap';
import useStoreStateApp from '@/store/useStoreStateApp';

export default function PageLoader() {
    console.log("PageLoader")
    const maskRef = useRef<HTMLDivElement>(null);
    const tlEnterRef = useRef<gsap.core.Timeline | null>(null);
    const tlExitRef = useRef<gsap.core.Timeline | null>(null);
    const {setIsCompleteTransitionPage} = useStoreStateApp()
    const setTimeline = useStoreTimeline((state) => state.setTimeline);

    useEffect(() => {
        setIsCompleteTransitionPage(false)
        if (maskRef.current) {
            tlEnterRef.current = gsap.timeline({ onComplete:() => {
                gsap.set(maskRef.current,{
                    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                })
                setIsCompleteTransitionPage(true)
            },paused: true });
            tlEnterRef.current.to(maskRef.current, { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", duration: 1 });
            tlExitRef.current = gsap.timeline({ paused: true });
            tlExitRef.current.to(maskRef.current,{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", duration: 1 });
           
            
            //play
            tlEnterRef.current?.play()
            setTimeline('pageLoaderExit', tlExitRef.current)
          
        }
        return () => {
            tlEnterRef.current?.kill()
            tlExitRef.current?.kill()
        };
    }, []);

    return (
        <div className={s.pageLoader} >
            <div ref={maskRef} className={s.mask}></div>
        </div>
    )
}

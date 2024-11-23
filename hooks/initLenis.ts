import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import {  isMobileAndTablet } from "@/utils/responsive";
export default function initLenis() {
    if(isMobileAndTablet()) return
    const lenis = useRef<Lenis>(); 
    console.log("initLenis")
    useEffect(() => {
        lenis.current = new Lenis({
            lerp: .072,
            syncTouch: true
          
        });
        window.lenis = lenis.current
        function raf(time: number) {
            lenis.current?.raf(time); 
            requestAnimationFrame(raf); 
        }

        requestAnimationFrame(raf); 

        return () => {
            if (lenis.current) {
                lenis.current.destroy();
            }
            if(window.lenis) {
                window.lenis = null
            }
        };
    }, []);

    return null
}

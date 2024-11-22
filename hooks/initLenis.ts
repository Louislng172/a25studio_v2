import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
export default function initLenis() {
    const lenis = useRef<Lenis>(); // Tạo tham chiếu cho Lenis
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
        };
    }, []);

    return null
}

import React, { useEffect, useRef } from 'react'
import s from './style.module.css'

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
gsap.registerPlugin(useGSAP);
export default function PageLoader() {
    const pathName = usePathname()
    const container = useRef(null);
    useGSAP(() => {
        gsap.to(container.current, { x: "100%",duration:1 }); 
    }, { scope: container });
    
    return (
        <div id={pathName.replace(/\//g, "")} className={s.pageLoader} ref={container}></div>
    )
}

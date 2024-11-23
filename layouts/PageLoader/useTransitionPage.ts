
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRouter } from 'next/navigation';
import React from 'react';

gsap.registerPlugin(useGSAP)
export const enterPageTransition = ({container}:{container:React.ReactElement}) => {
    useGSAP(() => {
        gsap.to(container, { x: "100%",duration:1 }); 
    });
}


export const exitPageTransition = ({targetDom,router,targetLink}:{targetDom:any,router:any,targetLink:string}) => {
    gsap.timeline({
        onComplete:() => {
            setTimeout(()=> router.push(targetLink),200)
          }
    }).to(targetDom, { x: "0%",duration:1 }); 
  
}
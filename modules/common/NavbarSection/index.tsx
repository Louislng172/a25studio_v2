
import React from 'react'
import s from './style.module.css'
import Link from 'next/link'
import ButtonUnderline from '@/interactive/Button/Underline'
import {Lang_en} from '@Constants/data_all'
import { usePathname,useRouter } from 'next/navigation'

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { exitPageTransition } from '@/layouts/PageLoader/useTransitionPage'


gsap.registerPlugin(useGSAP);
export default function index({content}:{content?:any}) {
 console.log("Re-render???")
 const pathName = usePathname()
 const router = useRouter()
 const handleRedirect = (e:any) => {
    const targetDom = document.getElementById(`${pathName.replace(/\//g, "")}`)
    const targetLink = e.currentTarget.getAttribute("data-link")
    exitPageTransition({
      targetDom:targetDom,
      router:router,
      targetLink:targetLink
    })
   
 }
  return (
    <section className={s.navbarSection}>
        <div className='layout'>
          <div className={s.logo}>
            <h2><Link href="/" >A25 studio</Link></h2>
          </div>
          <ul className={s.listItemNav}>
            <li><button onClick={handleRedirect} data-link="/services">Services</button></li>
            <li><button onClick={handleRedirect} data-link="/aboutus">About us</button></li>
            <li><button onClick={handleRedirect} data-link="/contact">Contact</button></li>
          </ul>
        </div>
    </section>
  )
}

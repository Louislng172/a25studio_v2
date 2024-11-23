import React from 'react'
import s from './style.module.css'
import Link from 'next/link'

export default function index() {
  return (
    <section className={s.navbarSection}>
        <div className='layout'>
          <div className={s.logo}>
            <h2><Link href="/" >A25 studio</Link></h2>
          </div>
          <ul className={s.listItemNav}>
            <li><Link href="/services" >Services</Link></li>
            <li><Link href="/aboutus" >About us</Link></li>
            <li><Link href="/contact" >Contact</Link></li>
          </ul>
        </div>
    </section>
  )
}

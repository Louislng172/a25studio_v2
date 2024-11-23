import React from 'react'
import s from './style.module.css'
export default function index() {
  return (
    <footer className={`${s.footerSection} padding-block-top padding-df bg_lv2`}>
        <div className='container'>
            <div className={s.layout_footer}>
                <div className={s.node1}>
                  <a>Services</a>
                  <a>About</a>
                  <a>Blog</a>
                  <a>Contact</a>
                </div>
                <div className={s.node2}>
                  <p className='p_large_style'>Contact now</p>
                </div>

                <div className={s.node3}>
                  <p className='p_medium_style'>2024. ALL RIGHTS RESERVED</p>
                  <p className='p_medium_style'>PRIVACY POLICY</p>
                </div>
                <div className={s.node4}>
                  <div className={s.child1}>
                    <span className='has--opacity_20'>Contacts</span>
                    <p>+123.456.789</p>
                    <p>s25@gmai.com</p>
                  </div>
                  <div className={s.child2}>
                    <span className='has--opacity_20'>Design by</span>
                    <p>20 Studio</p>
                    <p>A25 Studio</p>
                  </div>
                  <div className={s.child3}>
                    <span className='has--opacity_20'>Location</span>
                    <p>64 Vo Thi Sau, Q 1</p>
                    <p>HCMC</p>
                  </div>
                </div>
            </div>
            <div className={s.brandName}>
                <h1 className='h1_style'>pilot.a25studio @</h1>
            </div>
        </div>
    </footer>
  )
}

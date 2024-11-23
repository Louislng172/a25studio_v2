import React from 'react'
import s from './style.module.css'
import Tag from '@Components/Tag'
import SplitText from '@Components/SplitText'
export default function index() {
  return (
    <section className={`${s.introSection} padding-block`}>
        <div className='container'>
            <div className={s.introSectionWrap}>
                <div className={s.part1}>
                    <Tag classAdd={"p_medium_style"}>We are</Tag>
                </div>
                <div className={s.part2}>
                    <div className={s.node1}>
                        <SplitText classAdd={"p_large_style"}>Pilotrepublik
                        is a pioneering global
                        online consultancy
                        committed to
                        empowering individual
                        pilots and advancing
                        their careers on a
                        global scale.</SplitText>
                    </div>
                </div>
                <div className={s.part3}>
                   
                </div>
            </div>
        </div>
    </section>
  )
}

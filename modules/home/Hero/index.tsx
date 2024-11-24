import React from 'react'
import s from './style.module.css'
import Tag from '@Components/Tag'
import ParagraphChars from '@/interactive/Paragraph/Char'


export default function index() {

  return (

    <section className={s.heroSection}>
      <div className='container'>
        <div className={s.heroSectionWrap}>
          <div className={s.part1}>
            <div className='layout'>

              <div className={s.node1}>
                <ParagraphChars delayEnter={.3}>
                  <p className='p_large_style'>for Pilots<br />on a Global Scale</p>
                </ParagraphChars>
              </div>

              <Tag classAdd={"p_medium_style"}>We are</Tag>

              <div className={s.node2}>
                <ParagraphChars delayEnter={.5}>
                  <p className='p_medium_style'>Streamlined support for obtaining a Green Card through the EB1A, EB2 visa categories, and National Interest Waiver (NIW)</p>
                </ParagraphChars>
              </div>
            </div>
          </div>
          <div className={s.part2}>
          <h1 className='h1_style'>Advanced career</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

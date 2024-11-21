import React from 'react'
import s from './style.module.css'
import Tag from '@/app/components/Tag'
export default function FactSection() {
    return (
        <section className={s.factSection}>
            <div className='container'>
                <div className={s.factSectionWrap}>
                    <div className={s.part1}>
                        <div className='layout'>
                            <Tag classParent={s.tag} classAdd='p_medium_style'>We provide</Tag>
                            <p className={`${s.text} p_medium_style`}>
                                specialized assistance in obtaining a
                                green card to pursue a career in
                                the United States
                            </p>
                        </div>
                    </div>
                    <div className={s.part2}>
                        <div className='layout'>
                           
                        <p className={`${s.heading} h2_style`}>Our focus is on the EB1A
                                    and EB2 visa categories,
                                    along with the National
                                    Interest Waiver (NIW)
                                </p>
                            <Tag classParent={s.tagsub} classAdd='p_medium_style'>Charting Success,Guiding Futures</Tag>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

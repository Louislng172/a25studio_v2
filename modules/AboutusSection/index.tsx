import React from 'react'
import s from './style.module.css'
import Tag from '@Components/Tag'
import ImagePreload from '@/components/ImagePreload'
export default function AboutusSection() {
  return (
    <section className={`${s.aboutusSection} padding-block`}>
        <div className={s.aboutusWrap}>
            <div className='layout has_big_gap'>
                <Tag classAdd='' classParent={s.tag} >ABOUT US</Tag>
                <div className={s.text1}>
                    <p className='p_large_style'>Charting Success,
                    Guiding Futures:
                    Navigating immigration
                    complexities, crafting
                    opportunities for pilot
                    success</p>
                </div>
                <div className={s.text2}>
                    <p className='p_medium_style'>Pilotrepublik stands as more than
                    just a consultancy; it acts as the
                    essential conduit between your
                    aspirations and their realization.
                    Backed by a team of seasoned
                    aviation professionals and
                    immigration experts, we excel in
                    providing customized guidance
                    tailored specifically for pilots
                    striving to establish a thriving
                    career in the United States. Our
                    commitment extends beyond mere
                    consultation, as we are dedicated
                    to facilitating the transformation
                    of your dreams into tangible
                    achievements.</p>
                    <p className='p_medium_style'>With Pilotrepublik, you&apos;ll
                        receive personalized support
                        throughout your journey
                        towards success.</p>
                </div>
                <div className={s.image}>
                        <ImagePreload src="/home/home4.webp" alt="home4" w="100%" h="auto" />
                </div>
            </div>
        </div>
    </section>
  )
}

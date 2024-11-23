import React from 'react'
import s from './style.module.css'
import Tag from '@Components/Tag'
import ImagePreload from '@/components/ImagePreload'
export default function Advantages() {
const data = [
    {
        name: "Comprehensive Expertise",
        des: "We blend immigration expertise with aviation industry focus, offering specialized legal and sector-specific guidance."
    },
    {
        name: "Comprehensive Expertise",
        des: "We blend immigration expertise with aviation industry focus, offering specialized legal and sector-specific guidance."
    },
    {
        name: "Comprehensive Expertise",
        des: "We blend immigration expertise with aviation industry focus, offering specialized legal and sector-specific guidance."
    },
    {
        name: "Comprehensive Expertise",
        des: "We blend immigration expertise with aviation industry focus, offering specialized legal and sector-specific guidance."
    },
]
  return (
    <section className={`${s.advantagesSection} padding-block`}>
        <div className='layout fit_layout'>
            <Tag classParent={`${s.tag}`} classAdd="p_medium_style">Advantages</Tag>
            {data.map((item,index) => (
                <div key={index} className={`${s.box} ${s[`box_${index}`]}`}>
                    <span className="p_medium_style">{index + 1}</span>
                    <h3 className='p_large_style'>{item.name}</h3>
                   {/*  <p className='p_medium_style'>{item.des}</p> */}
                </div>
            ))}
            <div className={s.image}>
                <ImagePreload src="/home/home2.webp" alt="home2" w='100%' h="auto" />
            </div>
        </div>
    </section>
  )
}

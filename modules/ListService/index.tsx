import React from 'react'
import s from './style.module.css'
import Tag from '@Components/Tag'
export default function ListService() {
    const data = [ 
        {
            name:"Brozon",
            label:"Meticoioicoic",
            des:"Explore our Bronze Service for a thorough review of your I-140 petition, with tailored feedback and guidance to meet USCIS requirements."
        },
        {
            name:"Brozon",
            label:"Meticoioicoic",
            des:"Explore our Bronze Service for a thorough review of your I-140 petition, with tailored feedback and guidance to meet USCIS requirements."
        },
        {
            name:"Brozon",
            label:"Meticoioicoic",
            des:"Explore our Bronze Service for a thorough review of your I-140 petition, with tailored feedback and guidance to meet USCIS requirements."
        },
        {
            name:"Brozon",
            label:"Meticoioicoic",
            des:"Explore our Bronze Service for a thorough review of your I-140 petition, with tailored feedback and guidance to meet USCIS requirements."
        }
    ]
  return (
    <section className={`${s.listServiceSection} padding-block`}>
        <div className={s.listServiceWrap}>
            <div className={s.part1}>
                <h2 className="h1_style">Services we provide</h2>
                <Tag classParent='' classAdd='p_medium_style'>Services</Tag>
            </div>
            <div className={s.part2}>
                {data.map((item,index) => (
                    <div key={index} className={s.dropdownBox}>
                        <div className='layout'>
                            <h3 className='p_large_style'>{item.name}</h3>
                            <div className={s.circle}></div>
                            <p className='p_large_style'>{item.label}</p>
                            <a>Button</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

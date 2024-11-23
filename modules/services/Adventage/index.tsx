import React from 'react'
import s from './style.module.css'
export default function Adventage() {
    const data = [
        {
            label: "Enhance your I-140 petition with expert consultation",
            tag:"Brozon1",
            detail:"Begin your EB1A/EB2 NIW petition with our Bronze Service. Schedule an online review for your self-built I-140 petition, get critical feedback, and benefit from tailored support."
        },
        {
            label: "Enhance your I-140 petition with expert consultation",
            tag:"Brozon1",
            detail:"Begin your EB1A/EB2 NIW petition with our Bronze Service. Schedule an online review for your self-built I-140 petition, get critical feedback, and benefit from tailored support."
        },
        {
            label: "Enhance your I-140 petition with expert consultation",
            tag:"Brozon1",
            detail:"Begin your EB1A/EB2 NIW petition with our Bronze Service. Schedule an online review for your self-built I-140 petition, get critical feedback, and benefit from tailored support."
        }
    ]
  return (
    <section className={`${s.advenServiceSection} padding-block`}>
        <div className="">
            <ul className={s.listAdven}>
                {data.map((item,index) => (
                    <li className={`${s.item} layout`} key={index}>
                        <span className={`${s.number} h2_style`}>0{index+1}</span>
                        <div className={s.grid_inner}>
                            <h3 className={`${s.label} p_large_style`}>{item.label}</h3>
                            <p className={`${s.text} has--opacity_20`}>Begin your EB1A/EB2 NIW petition
                                with our Bronze Service. Schedule
                                an online review for your self-built
                                I-140 petition, get critical feedback,
                                and benefit from tailored support.
                            </p>
                            <span className={`${s.tag} has--opacity_20`}>{item.tag}</span>
                        </div>
                    </li>
                ))}
            </ul>
            
        </div>
    </section>
  )
}

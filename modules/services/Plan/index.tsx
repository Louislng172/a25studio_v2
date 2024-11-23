import React from 'react'
import s from './style.module.css'
import Button4 from '@/components/Button4'
export default function Plan() {
    const data = [
        {
            namePackage: "Bronze",
            price: 699,
            note:[
                "Schedule a ONE-HOUR online session via Zoom to discuss the feedback and review of your self-built I-140 petition.",
                "Constructive criticism provided in written comments without edits.",
                "Thorough analysis of your Request for Evidence (RFE) letter, if applicable.",
                "Detailed comments provided."
            ]
        },
        {
            namePackage: "Bronze",
            price: 699,
            note:[
                "Schedule a ONE-HOUR online session via Zoom to discuss the feedback and review of your self-built I-140 petition.",
                "Constructive criticism provided in written comments without edits.",
                "Thorough analysis of your Request for Evidence (RFE) letter, if applicable."
            ]
        },
        {
            namePackage: "Gold",
            price: 1699,
            note:[
                "Schedule a ONE-HOUR online session via Zoom to discuss the feedback and review of your self-built I-140 petition.",
                "Constructive criticism provided in written comments without edits.",
                "Thorough analysis of your Request for Evidence (RFE) letter, if applicable.",
                "Detailed comments provided.",
                 "Detailed comments provided.",
                  "Detailed comments provided."
            ]
        }
    ]
    return (
        <section className={`${s.planeServiceSection}`}>
            <div className={s.node1}>
                <h2 className={`${s.label} h2_style`}>Choose the
                    perfect tariff for
                    your needs</h2>
                <p className={`${s.more} p_medium_style`}>Check out our
                    variety of plans to
                    find the perfect fit
                    for your needs
                    and budget</p>
            </div>
            <div className={`${s.node2} padding-block-top`}>
                <ul className={s.tablePlan}>
                    {data.map((item,index) => (
                        <li key={index} className={s.itemPlan}>
                            <div className={s.headBox}>
                                <h3 className='heading-small'>{item.namePackage}</h3>
                                <span className='heading-small'>${item.price}</span>
                            </div>
                            <ul className={s.notePlan}>
                                {item.note.map((it,i) => (
                                    <li key={i}>
                                        {it}
                                    </li>
                                ))}
                            </ul>
                            <Button4 styleCs={4} classAdd={s.btn}>Buy Now</Button4>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

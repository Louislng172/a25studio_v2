import React from 'react'
import s from './style.module.css'
import IconArrow from '@/components/Icon/Arrow'
export default function index() {
  const data = [
    {
      name:["Submit Your","Resume"],
      des:"Share your resume with us throu resume with us throu resume with us throu resume with us through our secure submission portal."
    },
    {
      name:["Comprehensive","Review"],
      des:"Share your resume with us l."
    },
    {
      name:["Detailed","Feedback"],
      des:"Share your resume with us through our secure submissthrough our secure submission portathrough our secure submission portathrough our secthrough our secure submission portathrough our secure submission portaure submission portaion portal."
    },
    {
      name:["No","Obligation"],
      des:"Share your resume with us through our secure submission portal."
    }
  ]
  return (
    <section className={`${s.howitworkSection} bg_lv2`}>
        <div className='container'>
                <div className={s.howitworkWrap}>
                    <div><p>Dream of advancing your pilot career?</p></div>
                    <div><h2 className='h1_style'>How it works</h2></div>
                    <div><p>Scroll</p></div>
                </div>
        </div>
        <div className='container padding-block'>
          <div className={`${s.node2}`}>
            {data.map((item,index) => (
              <div key={index} className={s.item}>
                <div className={s.childItem}>
                  <span className='h2_style'>0{index+1}</span>
                  <div className={s.more}>
                    <h3 >{item.name[0]}<br/>{item.name[1]}</h3>
                    <p>{item.des}</p>
                  </div>
                </div>
                <button className={s.icon}><IconArrow/></button>
              </div>
            ))}
            
           
          </div>
        </div>
    </section>
  )
}

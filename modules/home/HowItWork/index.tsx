import React from 'react'
import s from './style.module.css'
export default function index() {
  const data = [
    {
      name:"Submit your name",
      des:"Share your resume with us through our secure submission portal."
    },
    {
      name:"Submit your name",
      des:"Share your resume with us through our secure submission portal."
    },
    {
      name:"Submit your name",
      des:"Share your resume with us through our secure submission portal."
    },
    {
      name:"Submit your name",
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
                  <span>0{index+1}</span>
                  <h3>{item.name}</h3>
                  <p>{item.des}</p>
                </div>
               {/*  <div className={s.mask}></div> */}
              </div>
            ))}
            
           
          </div>
        </div>
    </section>
  )
}

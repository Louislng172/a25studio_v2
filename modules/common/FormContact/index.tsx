import React from 'react'
import s from './style.module.css'
import Button4 from '@/components/Button4'
export default function index() {
  return (
    <section className={`${s.formContactSection} padding-block`}>
      <div className={s.grid}>
        <p className={`${s.label} p_large_style`}>Obligation
          free your resume
          review
        </p>
        <div className={s.more}>
          <p>Disclaemer</p>
          <p>The obligation-free resume
            review is for informational
            purposes only and doesnt
            constitute legal advice. Pilots
            should review Pilotrepubliks
            terms and conditions before
            proceeding.</p>
        </div>
        <div className={s.formSpace}>
          <form className={s.form}>
            <div className={s.fieldName}>
              
              <input
                type="text"
                id="name"
                name="name"
                placeholder='ENTER YOUR NAME'
                required
              />
            </div>
            <div className={s.fieldEmail}>
             
              <input
                type="email"
                id="email"
                name="email"
                placeholder='ENTER YOUR EMAIL'
                required
              />
            </div>
            <div className={s.fieldArea}>
              <textarea maxLength={5000} placeholder="Message"  name="field-2" data-name=""></textarea>
            </div>
            <Button4 styleCs={0} type='submit'>Send us</Button4>
          
          </form>
        </div>
      </div>
    </section>
  )
}

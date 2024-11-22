import React from 'react'
import s from './style.module.css'
export default function ContactSection() {
  return (
    <section className={`${s.contactSection} padding-block`}>
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
            <div>
              <label htmlFor="name">Tên:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={"this.value"}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={"this.value"}
                required
              />
            </div>
            <button type="submit">Gửi</button>
          </form>
        </div>
      </div>
    </section>
  )
}

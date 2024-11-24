import React from 'react'
import s from './style.module.css'
export default function BackgroundLineCross() {
  return (
    <div className={s.BackgroundLineCross}>
        <div className={s.lineUp}></div>
        <div className={s.lineDown}></div>
    </div>
  )
}

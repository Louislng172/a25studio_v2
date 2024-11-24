import React from 'react'
import s from './style.module.css'
import CrossIcon from '../Icon/Cross'
export default function BackgroundCrossIcon() {
  return (
    <div className={s.BackgroundCrossIcon}>
            <div><CrossIcon/></div>
            <div><CrossIcon/></div>
            <div><CrossIcon/></div>
            <div><CrossIcon/></div>
    </div>
  )
}

"use client"
import initFirstLoad from '@/hooks/initFirstLoad'
import AboutusPage from '@Page/AboutusPage'

export default function page() {
  initFirstLoad()
  return (
    <AboutusPage/>
  )
}

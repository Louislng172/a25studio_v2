import AdvenServiceSection from '@/modules/AdvenServiceSection'
import IntroServiceSection from '@/modules/IntroServiceSection'
import PlaneServiceSection from '@/modules/PlaneServiceSection'
import React from 'react'

export default function ServicesPage() {
  return (
    <>
      <IntroServiceSection/>
      <AdvenServiceSection/>
      <PlaneServiceSection/>
    </>
  )
}

import AdvenServiceSection from '@Modules/services/AdvenServiceSection'
import IntroServiceSection from '@Modules/services/IntroServiceSection'
import PlaneServiceSection from '@Modules/services/PlaneServiceSection'
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

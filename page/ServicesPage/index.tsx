import Adventage from '@/modules/services/Adventage'
import Intro from '@Modules/services/Intro'
import Plan from '@Modules/services/Plan'
import React from 'react'
import FormContactSection from '@/modules/common/FormContact'
export default function ServicesPage() {
  return (
    <>
      <Intro/>
      <Adventage/>
      <Plan/>
      <FormContactSection/>
    </>
  )
}

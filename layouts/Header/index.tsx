import React from 'react'

import NavbarSection from '@Modules/common/NavbarSection'

import NoiseBg from '@Modules/common/NoiseBg'
export default function index() {
  return (
    <header>
        <div style={{ height: "0vh", width: "100%", position: "relative", borderBottom: "1px solid gray" }}></div>
       <NavbarSection />
      
      
       <NoiseBg />
    </header>
  )
}

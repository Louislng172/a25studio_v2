"use client"
import React from 'react'
import HeroSection from '@Modules/HeroSection'

import IntroSection from '@Modules/IntroSection'
import Advantages from '@Modules/Advantages'
import FactSection from '@Modules/FactSection'
import ListService from '@Modules/ListService'
import AboutusSection from '@Modules/AboutusSection'
import HowItWorkSection from '@Modules/HowItWorkSection'

import ContactSection from '@Modules/ContactSection'

export default function index() {

    return (
        <>
       
            <HeroSection />
            <IntroSection/>
            <Advantages/>
            <FactSection/>
            <ListService/>
            <HowItWorkSection/>
            <ContactSection/>
            <AboutusSection/>
        </>
    )
}

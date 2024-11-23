
import React from 'react'
import HeroSection from '@/modules/home/Hero'

import IntroWelcome from '@Modules/home/IntroWelcome'
import Advantages from '@Modules/home/Advantages'
import Fact from '@/modules/home/Fact'
import ListService from '@Modules/home/ListService'
import IntroUs from '@/modules/home/IntroUs'
import HowItWorkSection from '@/modules/home/HowItWork'

import FormContactSection from '@/modules/common/FormContact'




export default function index({data}:{data?:any}) {
 
    return (
        <>
            <HeroSection />
            <IntroWelcome/>
            <Advantages/>
            <Fact/>
            <ListService/>
            <HowItWorkSection/>
            <FormContactSection/>
            <IntroUs/>
        </>
    )
}

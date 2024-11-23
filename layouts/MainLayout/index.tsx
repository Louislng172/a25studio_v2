"use client"
import initLenis from '@/hooks/initLenis'
import FormContactSection from '@/modules/common/FormContact'
import NoiseBg from '@Modules/common/NoiseBg'
import FooterSection from '@Modules/common/FooterSection'
import NavbarSection from '@Modules/common/NavbarSection'
import { usePathname } from 'next/navigation'
import { useEffect, ReactNode } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  initLenis()
  useEffect(() => {
    if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
  }, [pathname]);
  return (
    <>
      <NoiseBg />
      <NavbarSection />
      <div style={{ height: "0vh", width: "100%", position: "relative", borderBottom: "1px solid gray" }}></div>
      <main>
        {children}
      </main>
      <FormContactSection />
      <FooterSection />
    </>
  )
}

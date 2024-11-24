
import React, { memo } from 'react'
import s from './style.module.css'
import { usePathname, useRouter } from 'next/navigation'
import useStoreTimeline from '@/store/useStoreTimeline';

function NavbarSection({ content }: { content?: any }) {
  console.log("NavbarSection")
  const pathName = usePathname()
  const router = useRouter()
  const timelineStore = useStoreTimeline((state) => state.timelines);

  const handleRedirect = (e: any) => {

    const targetLink = e.currentTarget.getAttribute("data-link")
    if (pathName === targetLink) return
  
    timelineStore['pageLoaderExit']?.play().eventCallback("onComplete", () => {
      router.push(targetLink)
    });
  }

  return (
    <section className={s.navbarSection}>
      <div className='layout'>
        <div className={s.logo}>
          <h2><button onClick={handleRedirect} data-link="/">A25 studio</button></h2>
        </div>
        <ul className={s.listItemNav}>
          <li><button onClick={handleRedirect} data-link="/services">Services</button></li>
          <li><button onClick={handleRedirect} data-link="/aboutus">About us</button></li>
          <li><button onClick={handleRedirect} data-link="/contact">Contact</button></li>
        </ul>
      </div>
    </section>
  )
}
export default memo(NavbarSection)
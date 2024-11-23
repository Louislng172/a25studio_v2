
import Tag from '@/components/Tag'
import s from './style.module.css'
import ImagePreload from '@/components/ImagePreload'
export default function Intro() {
  return (
    <section className={s.serviceSection}>
      <div className={s.part1}>
        <div className={s.image}>
          <ImagePreload src='/about/services1.webp' alt='services1' w='auto' h="100%"/>
        </div>
        <div className={s.head}>
            <h1 className='h2_style'>Taking your aviation career higher</h1>
        </div>
      </div>
      <div className={s.part2}>
        <div className={`${s.layoutcommon} layout `}>
          <p className={s.text1}>Our specialized services offer
            comprehensive I-140 petition reviews tailored
            to aviation professionals' unique needs.</p>
          <p  className={s.text2}>Explore the unparalleled
            possibilities our services offer
            for enhancing your aviation
            career and immigration
            journey. Take the first step
            towards realizing dreams in
            the land of opportunity by
            contacting us today. now Let's
            embark on this journey
            together towards a future</p>

          <Tag classAdd='' classParent={s.text3}>pilot.a25 studio</Tag>
          <h3 className={s.text4}>Aviation
            Immigration</h3>
        </div>

        <div className={`${s.layoutstyle} layout`}>
          <p className={s.text1}>Discover how
            we can elevate your
            aviation career.</p>
          <div className={s.box2}>
            <ImagePreload src='/about/services2.webp' alt='services1' w='80%' h="auto"/>
          </div>
          <h3 className='h2_style'>our
          services</h3>
          <p  className={s.text2}>Contact us today to start realizing</p>
        </div>

      </div>
    </section>
  )
}

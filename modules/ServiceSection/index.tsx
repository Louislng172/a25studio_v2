
import Tag from '@/components/Tag'
import s from './style.module.css'
export default function ServiceSection() {
  return (
    <section className={s.serviceSection}>
      <div className={s.part1}>
        <div className={s.image}>
        </div>
        <div className={s.head}>
            <h1 className='h2_style'>Taking your aviation career higher</h1>
        </div>
      </div>
      <div className={s.part2}>
        <div className='layout'>
          <p>Our specialized services offer
            comprehensive I-140 petition reviews tailored
            to aviation professionals' unique needs.</p>
          <p>Explore the unparalleled
            possibilities our services offer
            for enhancing your aviation
            career and immigration
            journey. Take the first step
            towards realizing dreams in
            the land of opportunity by
            contacting us today. now Let's
            embark on this journey
            together towards a future</p>

          <Tag classAdd='' classParent=''>pilot.a25 studio</Tag>
          <h3>Aviation
            Immigration</h3>
        </div>

        <div className='layout'>
          <p>Discover how
            we can elevate your
            aviation career.</p>
          <div className={s.box2}></div>
          <h3>our
          services</h3>
          <p>Contact us today to start realizing</p>
        </div>

      </div>
    </section>
  )
}

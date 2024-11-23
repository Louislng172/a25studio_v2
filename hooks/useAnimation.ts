/* import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { MutableRefObject, useRef } from 'react';
import { MathMap } from '@Utils/mathUtils';
import { IAnimationProps, IValueHookAnimation } from '@Types/animation';
import { IAnimationElement } from '@/types/common';

interface IProps extends IValueHookAnimation, IAnimationProps {
  trigger: MutableRefObject<IAnimationElement | null>;
}

export default function useAnimation({
  trigger,
  initAnimation,
  playAnimation,
  isObserver,
  threshold,
  start,
  horizontal,
  markers,
  isInPopup,
}: IProps): void {
  const refObserver = useRef<IntersectionObserver | null>(null);
  const { registerLoad, unRegisterLoad } = useLoadManageSignal();
  const refTime = useRef<NodeJS.Timeout>();
  const isPlayTrigger = useComputedDeps(() => {
    return (isPlayForPopupState.value && isInPopup) || isPlayState.value;
  }, [isInPopup]);
  const { contextSafe } = useGSAP(
    () => {
      registerLoad();
      setTimeout(() => {
        unRegisterLoad();
      }, 100);
    },
    { scope: trigger }
  );


  const onHandleAnimation = contextSafe((): (() => void) => {
    let calcTheshold = threshold || 0;
    let trl: ScrollTrigger | null = null;
    if (calcTheshold === 0 && trigger.current) {
      const { height, top } = trigger.current.getBoundingClientRect();
      if (top >= window.innerHeight) {
        calcTheshold = MathMap(height / window.innerHeight, 0, 100, 30, 0);
        calcTheshold = Math.max(Math.min(calcTheshold, 30), 0);
      }
    }

    if (!isObserver) {
      trl = ScrollTrigger.create({
        trigger: trigger.current,
        onEnter: () => playAnimation(),
        start: start || `top+=${calcTheshold}% bottom`,
        horizontal,
        once: true,
        markers,
      });
    } else {
      refObserver.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            playAnimation();
            trigger.current && refObserver.current?.unobserve(trigger.current);
            refObserver.current?.disconnect();
          }
        },
        { threshold: calcTheshold / 100 }
      );
      trigger.current && refObserver.current?.observe(trigger.current);
    }

    return () => {
      if (trl) {
        trl.kill();
      } else if (refObserver.current) {
        trigger.current && refObserver.current?.unobserve(trigger.current);
        refObserver.current?.disconnect();
      }
    };
  });


}
 */
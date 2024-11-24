import { useGSAP } from '@gsap/react';
import useSplitType from '@Hooks/useSpitType';
import { getDelay } from '@Utils/uiHelper';
import { gsap } from 'gsap';
import { MutableRefObject } from 'react';

import { IValueHookAnimation } from '@/types/animation';

import s from './style.module.css';

interface IUseParagraphChars {
  refContent: MutableRefObject<HTMLDivElement | HTMLSpanElement | HTMLParagraphElement | null>;
  delayTrigger?: number;
  delayEnter?: number;
  offset?: number;
  isObserver?: boolean;
  typeEff?: string;
}

export default function useParagraphChars({
  refContent,
  delayTrigger = 0,
  delayEnter = 0,
  offset = 0,
  typeEff,
}: IUseParagraphChars): IValueHookAnimation {
  const { splitter } = useSplitType({
    refTarget: refContent,
    types: 'words,chars',
  });
  console.log("===========useParagraphChars")
  const { contextSafe } = useGSAP({ scope: refContent });

  const initAnimation = contextSafe(() => {
 
    splitter?.chars &&
      gsap.set(splitter?.chars, {
       y :"100%"
      });
  });

  const playAnimation = contextSafe(() => {
    if (!splitter?.chars) return;
    const delay = getDelay({ refContentCurrent: refContent.current, delayEnter, delayTrigger });

    gsap.to(splitter?.chars, {
         y :"0%",
         delay:delayEnter
      });
  });
  return { initAnimation, playAnimation };
}

'use client';


import React, { PropsWithChildren, ReactElement, useRef } from 'react';
import useButtonUnderline from './useButtonUnderline';



interface ParagraphLineMaskProps extends PropsWithChildren {
  delayEnter?: number;
  delayTrigger?: number;
  isObserver?: boolean;
  typeEff?: string;
  threshold?: number;
}

type typeRef = HTMLDivElement | HTMLSpanElement | HTMLParagraphElement;

export default function ButtonUnderline({
  children,
  delayEnter,
  delayTrigger,
  isObserver,
  typeEff,
  threshold,
}: ParagraphLineMaskProps): ReactElement {
  const refContent = useRef<typeRef>(null);

  const { initAnimation, playAnimation } = useButtonUnderline({
    refContent,
    delayTrigger,
    delayEnter,
    isObserver,
    typeEff,
  });
  initAnimation()
  playAnimation()
  if (!React.isValidElement(children)) {
    return <div>Error: Invalid children element</div>;
  }

  return React.cloneElement(children, { ...{ ref: refContent } });
}

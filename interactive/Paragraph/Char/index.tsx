'use client';


import React, { PropsWithChildren, ReactElement, useRef } from 'react';
import useParagraphChars from './useParagraphChars';



interface ParagraphLineMaskProps extends PropsWithChildren {
  delayEnter?: number;
  delayTrigger?: number;
  isObserver?: boolean;
  typeEff?: string;
  threshold?: number;
}

type typeRef = HTMLDivElement | HTMLSpanElement | HTMLParagraphElement;

export default function ParagraphChars({
  children,
  delayEnter,
  delayTrigger,
  isObserver,
  typeEff,
  threshold,
}: ParagraphLineMaskProps): ReactElement {
  const refContent = useRef<typeRef>(null);

  const { initAnimation, playAnimation } = useParagraphChars({
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

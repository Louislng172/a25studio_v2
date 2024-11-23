"use client"
import initFirstLoad from '@/hooks/initFirstLoad';
import HomePage from '@Page/HomePage'

export default function page() {
  initFirstLoad()

  return (
    <HomePage />
  );
}

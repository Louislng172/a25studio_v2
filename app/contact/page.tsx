"use client"
import initFirstLoad from "@/hooks/initFirstLoad";
import ContactPage from "@Page/ContactPage";

export default function page() {
  initFirstLoad()
  return (
    <ContactPage/>
  )
}

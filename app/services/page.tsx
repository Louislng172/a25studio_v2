"use client"
import initFirstLoad from "@/hooks/initFirstLoad";
import ServicesPage from "@Page/ServicesPage";

export default function page() {
  initFirstLoad()
  return (
    <ServicesPage/>
  )
}

"use client";

import PageLoader from "@/layouts/PageLoader";


export default function Template({ children }: { children: React.ReactNode }) {


  return (
    <>
      <PageLoader/>
      {children}
    </>
  );
}
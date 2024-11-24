"use client";

import PageLoader from "@/layouts/PageLoader";
import { useEffect } from "react";


export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("Template")
  }, []);

  return (
    <>
      <PageLoader/>
      {children}
    </>
  );
}
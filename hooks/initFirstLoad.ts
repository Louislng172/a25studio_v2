

import { useEffect } from "react";
import resetLenis from "./resetLenis";
export default function initFirstLoad() {
    console.log("initFirstLoad")
    resetLenis()
    useEffect(() => {
        document.body.style.pointerEvents = "none"
        setTimeout(() => {
               document.body.style.pointerEvents = "auto"
        }, 500);
    },[])
    return null
}

import { useEffect } from "react";
export default function resetLenis() {
    console.log("resetLenis")
    useEffect(() => {
        if (window.lenis) {
            window.lenis.scrollTo(0, { immediate: true })
        }
    }, []);

    return null
}

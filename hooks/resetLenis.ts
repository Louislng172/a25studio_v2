import { useEffect } from "react";
import { usePathname } from 'next/navigation'
export default function resetLenis() {
    const pathname = usePathname()
    console.log("resetLenis")
    useEffect(() => {
        if (window.lenis) {
            window.lenis.scrollTo(0, { immediate: true })
        }
    }, [pathname]);

    return null
}

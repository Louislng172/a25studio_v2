
import { isMobileAndTablet } from "@/utils/responsive";
import resetLenis from "./resetLenis";
export default function initFirstLoad() {
    console.log("initFirstLoad")
    if(!isMobileAndTablet()) resetLenis()
 
    return null
}

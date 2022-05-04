import Alpine from "alpinejs";
import {gsap} from "gsap";

const searchSetup = () => {

    Alpine.store('searchSetup', {
        isOpen: false,
        toggle(){

            const duration = 0.5;
            if(!this.isOpen) {
                this.isOpen = true
                //gsap.to("#main", {duration: duration, scale: 0.8, ease: "power2.inOut"});
                gsap.fromTo("#search-overlay",{y: "100%"},  {duration: 0.8, y: 0 , delay:0.1, ease: "power2.inOut"});
            } else {
                //gsap.to("#main", {duration: duration, scale: 1, ease: "power2.inOut"});
                gsap.fromTo("#search-overlay", {y: 0},{duration: duration, y: "100%", ease: "power2.inOut", onComplete: () => {
                    this.isOpen = false
                }});
            }
        }
    });
}

export default searchSetup;
import Alpine from "alpinejs";
import { gsap } from "gsap";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const navigationSetup = () => {
    Alpine.store('navSetup', {
        isOpen: false,
        currentSidebarTab: null,
        isSettingsPanelOpen: false,
        isSubHeaderOpen: false,
        hasScrolled: false,
        hideLogo: false,
        disableHideLogo: false,
        isLight: Alpine.$persist(true),
        scroller: null,
        initSmoothScroller(anim) {
           return  window.scroller = ScrollSmoother.create({
                wrapper: "#smooth-wrapper",
                content: "#smooth-content",
                target: "#smooth-content",
                smooth: 2,
                effects: anim,
                //smoothTouch: true,
                //normalizeScroll: true,
                onUpdate: (el) => {
                    Alpine.store('navSetup').scrolling(el);
                }
            });
        },
        scrollSmooth () {
            const scope = this;
            const width = window.innerWidth;
            Alpine.store('navSetup').initSmoothScroller((width > 768));

            window.addEventListener("resize", () => {
                const width = window.innerWidth;
                if(width > 768){
                    if( !window.scroller.effects) {
                        console.log('turn on', window.scroller)
                        window.scroller.kill();
                        Alpine.store('navSetup').initSmoothScroller(true);
                    }
                    window.scroller.effects = true;
                } else {
                    if( window.scroller.effects) {
                        console.log('turn off', window.scroller)
                        window.scroller.kill();
                        Alpine.store('navSetup').initSmoothScroller(false);
                    }
                }
            });
        },
        scrolling (el) {
            this.hasScrolled = (el.scrollTop() > 50 ? true : false)
            if(!this.disableHideLogo) {
                if (this.hasScrolled) {
                    this.hideLogo = false;
                } else {
                    this.hideLogo = true;
                }
            }
        },
        toggle(){
            console.log(window.scroller);
            this.isOpen = !this.isOpen;
        }
    });
}

export default navigationSetup;
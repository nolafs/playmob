import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const sticky = () => ({
    container: null,
    init(){
        this.container = this.$el;
        ScrollTrigger.create(
            {
                trigger: '#sticky-container',
                start: 'top-=90 top',
                end: 'top bottom',
                endTrigger: "#footer",
                pin: '.social',
                pinSpacing: true,
                markers: false
            }
        )
    }
});

export default sticky;
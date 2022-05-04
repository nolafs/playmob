import {gsap} from "gsap";

export default (num) => ({
    action: null,
    init() {
        this.setup();
        window.addEventListener('resize', () => {
                this.action.kill();
                this.setup();
            }
        );
    },
    setup() {

        const screenWidth = window.innerWidth;
        const boxWidth = ((screenWidth * 2.5 ) / num);
        const totalWidth = boxWidth * num;  // * n of boxes + diff textBox
        const time = 20
        const no01 = document.querySelectorAll("#no01 .item")
        const dirFromLeft = "+=" + totalWidth;
        const dirFromRight = "-=" + totalWidth;
        const mod = gsap.utils.wrap(0, totalWidth);


        gsap.set(no01, {
            width: boxWidth,
            x:function(i) {
                return i * boxWidth;
            }
        });

        gsap.set('.wrapper',{xPercent:-50})

        this.action = gsap.timeline()
            .to(no01,  {
                x: dirFromLeft,
                modifiers: {
                    x: x => mod(parseFloat(x)) + "px"
                },
                duration:time, ease:'none',
                repeat:-1,
            });


    }
})
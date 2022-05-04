export default () => ({
        container: null,
        prev: null,
        next: null,
        start: null,
        currentIndex: 'index-0',
        init( start = null) {
            this.container = this.$refs.container
            this.start = start;
            setTimeout(() => {
                this.update();
                this.container.addEventListener('scroll', this.update.bind(this), {passive: true});
            }, 500)

            if(this.start){
                setTimeout(() => {
                    this.slideTo(this.start);
                }, 500)
            }
        },
        update() {
            const rect = this.container.getBoundingClientRect();
            const visibleElements = Array.from(this.container.children).filter((child) => {
                const childRect = child.getBoundingClientRect()
                return Math.floor(childRect.left) >= Math.floor(rect.left) && Math.floor(childRect.right) <= Math.floor(rect.right);
            });


            if (visibleElements.length > 0) {
                this.currentIndex = visibleElements[0].dataset['slide'];

                this.prev = this.getPrevElement(visibleElements);
                this.next = this.getNextElement(visibleElements);
            }


        },
        getPrevElement(list) {
            const sibling = list[0].previousElementSibling;

            if (sibling instanceof HTMLElement) {
                return sibling;
            }

            return null;
        },
        getNextElement(list) {
            const sibling = list[list.length - 1].nextElementSibling;

            if (sibling instanceof HTMLElement) {
                return sibling;
            }

            return null;
        },
        goToIndex($event){
            console.log($event.target)
            const index = $event.target.dataset.button;
            this.slideTo(index);
        },
        slideTo(index){
            const current = this.container;
            const scrollToElement = Array.from(this.container.children).filter((child) => {

                return (child.dataset.slide == index);
            })
            console.log(scrollToElement, index)

            if(scrollToElement.length) {

                const nextScrollPosition =
                    scrollToElement[0].offsetLeft +
                    scrollToElement[0].getBoundingClientRect().width / 2 -
                    current.getBoundingClientRect().width / 2;

                current.scroll({
                    left: nextScrollPosition,
                    behavior: 'smooth',
                });
            }
        },
        scrollTo(element) {
            const current = this.container;

            if (!current || !element) return;

            const nextScrollPosition =
                element.offsetLeft +
                element.getBoundingClientRect().width / 2 -
                current.getBoundingClientRect().width / 2;

            current.scroll({
                left: nextScrollPosition,
                behavior: 'smooth',
            });
        }
});
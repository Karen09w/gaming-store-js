import CONSTANTS from "../constants/constants.js";

export default (function () {
    function Observer({ blocks }) {
        this.options = {
            root: null,
            threshold: 0,
            rootMargin: CONSTANTS.observerGap,
        };
        this.blocks = blocks;
        this.observer = null;
    }

    Observer.prototype = {
        constructor: Observer,
        loadImages(target) {
            target.querySelectorAll("img[data-src]").forEach((img) => (img.src = img.dataset.src));
        },
        fadeItems(target) {
            this.loadImages(target);
            target
                .querySelectorAll("[data-lazy]")
                ?.forEach((element, index) =>
                    setTimeout(() => element.classList.add("lazy-animate"), element.dataset.lazyDelay || index * 100)
                );
        },
        unfadeItems() {
            document
                .querySelectorAll("section [data-lazy]")
                ?.forEach((element) => element.classList.remove("lazy-animate"));
            this.setObserver();
        },
        createObserver() {
            this.observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    this.fadeItems(entry.target);

                    observer.unobserve(entry.target);
                });
            }, this.options);
            this.setObserver();
        },
        setObserver() {
            this.blocks.forEach((block) => this.observer.observe(block));
        },

        setEvents() {
            window.addEventListener("scroll", () => {
                if (window.scrollY) return; 
                this.unfadeItems();
            });
        },
    };

    const state = {
        blocks: document.querySelectorAll("[data-lazy-block]"),
    };

    const observerInstance = new Observer(state);
    observerInstance.createObserver();
    observerInstance.setEvents();
})();

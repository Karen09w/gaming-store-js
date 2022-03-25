export const Navbar = (function(){
    const query = document.querySelector.bind(document)
    const queryAll = document.querySelectorAll.bind(document)

    function Navbar({ toggler, collapse, dropdownToggle, dropdownMenu, form }) {
        this.toggler = toggler;
        this.collapse = collapse;
        this.dropdownToggle = dropdownToggle;
        this.dropdownMenu = dropdownMenu;
        this.form = form;
    }
    
    Navbar.prototype = {
        constructor: Navbar,
    
        getHeight() {
            let computedHeight = null;
            [...this.collapse.children].forEach((each) => (computedHeight += this.getAbsoluteHeight(each)));
            return computedHeight + "px";
        },
        setHeight(isShown) {
            setTimeout(() => (this.collapse.style = isShown ? `height: ${this.getHeight()} ` : {}));
        },
        getAbsoluteHeight(el) {
            el = typeof el === "string" ? document.querySelector(el) : el;
    
            let styles = window.getComputedStyle(el);
            let margin = parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);
            let border = parseFloat(styles["borderTop"]) + parseFloat(styles["borderBottom"]);
    
            return Math.ceil(el.offsetHeight + margin + border);
        },
        setIsCollapsing() {
            const isShown = !this.collapse.classList.contains("show");
            this.collapse.className = `navbar-collapse collapsing ${isShown ? "show" : ""}`;
            this.setHeight(isShown);
        },
        removeFading() {
            this.collapse.classList.replace("collapsing", "collapse");
        },
        setIsDropdownShown(isShown) {
            this.dropdownMenu.className = `dropdown-menu ${isShown ? "show" : ""}`;
            this.setHeight(true);
        },
        setEvents() {
            this.toggler.addEventListener("click", (e) => this.setIsCollapsing());
            this.collapse.addEventListener("transitionend", () => this.removeFading());
            this.dropdownToggle.addEventListener("click", () =>
                this.setIsDropdownShown(!this.dropdownMenu.classList.contains("show"))
            );
            this.dropdownToggle.addEventListener("blur", () => this.setIsDropdownShown(false));
            this.form.addEventListener("submit", (e) => e.preventDefault());
        },
    };
    
    const state = {
        toggler: query(".navbar .navbar-toggler"),
        collapse: query(".navbar .navbar-collapse"),
        dropdownToggle: query(".navbar .dropdown-toggle"),
        dropdownMenu: query(".navbar .dropdown-menu"),
        form: query(".navbar form"),
    };
    
    const navbarHorizontal = new Navbar(state);
    navbarHorizontal.setEvents();

    return {
        navbarHorizontal
    }
})()


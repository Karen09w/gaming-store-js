export const Navbar = (function () {
    const query = document.querySelector.bind(document);
    const queryAll = document.querySelectorAll.bind(document);

    function Navbar({ nav, toggler, collapse, dropdownToggle, dropdownMenu, form, links, backdrop }) {
        this.nav = nav;
        this.toggler = toggler;
        this.collapse = collapse;
        this.dropdownToggle = dropdownToggle;
        this.dropdownMenu = dropdownMenu;
        this.form = form;
        this.links = links;
        this.backdrop = backdrop;
        this.isShown = false;
    }

    Navbar.prototype = {
        constructor: Navbar,

        getHeight() {
            return window.innerHeight - this.nav.clientHeight - 1 + "px";
        },
        setHeight() {
            if (window.innerWidth > 992) return;
            this.collapse.style.height = this.getHeight();
        },
        toggleCollapse() {
            this.collapse.style.transform = this.isShown ? ` none` : "";
        },
        setIsCollapsing() {
            this.isShown = !this.collapse.classList.contains("show");
            this.collapse.className = `navbar-collapse collapsing ${this.isShown ? "show" : ""}`;
            this.setHeight();
            this.toggleCollapse();
            this.toggleBackdrop();
            this.toggleLinks(true);
            this.adaptLayout(this.isShown);
        },
        removeFading() {
            this.collapse.classList.replace("collapsing", "collapse");
            this.toggleLinks(this.isShown);
        },
        toggleDropdown(isShown) {
            this.dropdownMenu.className = `dropdown-menu ${isShown ? "show" : ""}`;
        },
        toggleBackdrop() {
            this.backdrop.className = `navbar-backdrop ${this.isShown ? "show" : ""}`;
        },
        toggleLinks(isShown) {
            this.links.forEach((link, index) => {
                link.style.animation = isShown ? `navLinkFade 0.7s ease forwards ${index / 7}s` : "";
            });
        },
        adaptLayout(modify) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth + "px";
            const navbar = document.querySelector('.navbar')
            if (modify) {
                document.body.style.paddingRight = scrollbarWidth;
                document.body.style.overflow = 'hidden'
                navbar.style.borderRight = `${scrollbarWidth} solid transparent`
                document.body.setAttribute('data-dismiss','modified-layout')
                return;
            }
            
            document.body.style.paddingRight = "";
            document.body.style.overflow = ''
            navbar.style.borderRight = ''
            document.body.removeAttribute('data-dismiss')
       
        },

        setEvents() {
            this.toggler.addEventListener("click", (e) => this.setIsCollapsing());
            this.collapse.addEventListener("transitionend", () => this.removeFading());
            this.dropdownToggle.addEventListener("click", () =>
                this.toggleDropdown(!this.dropdownMenu.classList.contains("show"))
            );
            this.dropdownToggle.addEventListener("blur", () => this.toggleDropdown(false));
            this.backdrop.addEventListener("click", () => this.setIsCollapsing());
            window.addEventListener("scroll", (e) => this.nav.classList.toggle("shrink", window.scrollY > 0)); //window.scrollY > 300
        },
    };

    const state = {
        nav: query(".navbar"),
        toggler: query(".navbar .navbar-toggler"),
        collapse: query(".navbar .navbar-collapse"),
        dropdownToggle: query(".navbar .dropdown-toggle"),
        dropdownMenu: query(".navbar .dropdown-menu"),
        form: query(".navbar form"),
        links: queryAll(".navbar  .nav-link"),
        backdrop: query(".navbar-backdrop"),
    };

    const navbarHorizontal = new Navbar(state);
    navbarHorizontal.setEvents();

    return {
        navbarHorizontal,
    };
})();

export default (function Header(){
    const header = document.querySelector('.hero')
    const navbar = document.querySelector('.navbar')
    header.style.paddingTop = navbar.clientHeight + 'px'
})()
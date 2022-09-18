export function activeMenu() {
    const menu = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')
 
    function handleMenu(event) {
        menu.forEach((item) => {
            item.classList.remove('menu-ativo')
        })
        this.classList.add('menu-ativo')
    }
    
    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    menu.forEach((itemMenu) => {
        itemMenu.addEventListener('click', handleMenu)
        itemMenu.addEventListener('click', scrollToSection)
    })
}
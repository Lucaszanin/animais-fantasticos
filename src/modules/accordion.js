export function activeAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
    const activeClass = 'active-accordion'

    if (accordionList.length) {
        function activeAcoordion() {
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass)
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAcoordion)
        })
    }
}